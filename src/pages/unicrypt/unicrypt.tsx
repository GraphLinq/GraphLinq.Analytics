/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import {
  //POST_SELECTED_UNCL,
  POST_SELECTED_UNCX,
  //POST_TOTAL_LIQUIDITY,
  //POST_LIQUIDITY,
  POST_UNCX_TRADES,
  POST_HISTORY_UNCX,
  POST_SELECTED_ETH_PRICE,
} from "../../store/actionNames/glqAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
  Column,
} from "react-table";
//import {
//  XAxis,
//  YAxis,
//  HorizontalGridLines,
//  Crosshair,
//  LineSeries,
//  FlexibleXYPlot,
//} from "react-vis";
//import { Box } from "@chakra-ui/react";
import { formatCur, formatSupply, deltaDirection } from "../../utils";
import Moment from "react-moment";
import moment from "moment-timezone";
import jstz from "jstz";
import GaugeChart from "react-gauge-chart";
import {
  FaCaretUp,
  FaCaretDown,
  FaCog,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import SettingsModal from "../../components/SettingsModal";
import { Table } from "../../components/table";

interface UnclProps {}

type UncxType = {
  timestamp: string;
  side: string;
  priceUsd: string;
  priceEth: string;
  amount: number;
  totalEth: string;
  maker: string;
  exch: string;
  other: string;
};

Moment.globalFormat = "YYYY-MM-DD HH:mm:ss";
const m = moment();
const tz = jstz.determine().name();
const z = moment().format("Z");
const zz = m.tz(tz).zoneAbbr();

const circSupply = 34271;
const maxSupply = 50000;

interface ColumnType {
  column: {
    filterValue: any;
    setFilter: any;
    preFilteredRows: any;
    id: any;
  };
}

const BuyOrSellFilter = ({ column }: ColumnType) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...(options as any).values()];
  }, [id, preFilteredRows]);

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option: any, i: number) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

interface SliderColumnFilterType {
  column: {
    filterValue: any;
    preFilteredRows: any;
    setFilter: any;
    id: any;
  };
}

function SliderColumnFilter({ column }: SliderColumnFilterType) {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row: any) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div>
      <input
        className="rage-input"
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
      <div className="totaleth-button" onClick={() => setFilter(undefined)}>
        Off
      </div>
    </div>
  );
}

function filterGreaterThan(rows: any, id: any, filterValue: any) {
  return rows.filter((row: any) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val: any) => typeof val !== "number";

function roundedMedian(leafValues: any) {
  let min = leafValues[0] || 0;
  let max = leafValues[0] || 0;

  leafValues.forEach((value: any) => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });

  return Math.round((min + max) / 2);
}

interface DefaultColumnType {
  column: {
    filterValue: any;
    preFilteredRows: any;
    setFilter: any;
  };
}

function DefaultColumnFilter({ column }: DefaultColumnType) {
  const { filterValue, preFilteredRows, setFilter } = column;
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

const UnicryptContent: React.FC<UnclProps> = () => {
  const dispatch = useDispatch();
  //const unclState = useSelector((state: RootState) => state.unclSelect || {});
  const uncxState = useSelector((state: RootState) => state.uncxSelect || {});
  //const tLiqState = useSelector(
  //  (state: RootState) => state.totalLiquiditySelect || {}
  //);
  //const liqState = useSelector(
  //  (state: RootState) => state.liquiditySelect[0] || {}
  //);
  const uncxHistory = useSelector(
    (state: RootState) => state.uncxHistory || {}
  );
  const uncxTrades = useSelector(
    (state: RootState) => state.postUncxTradesSelect || {}
  );
  const ethPrice = useSelector((state: RootState) => state.ethPriceSelect || 0);

  useEffect(() => {
    //dispatch({ type: POST_SELECTED_UNCL, payLoad: unclState });
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState });
    //dispatch({ type: POST_TOTAL_LIQUIDITY, payLoad: tLiqState });
    //dispatch({ type: POST_LIQUIDITY, payLoad: liqState });
    dispatch({ type: POST_HISTORY_UNCX, payLoad: uncxHistory });
    dispatch({ type: POST_UNCX_TRADES, payLoad: uncxTrades });
    dispatch({ type: POST_SELECTED_ETH_PRICE, payLoad: ethPrice });
  }, []);
  const [openSettingsModal, setOpenSettingsModal] = useState<boolean>(false);
  //const [liquidityUSD, setLiquidityUSD] = useState<{ x: any; y: any }[]>([]);
  //const [pairCount, setPairCount] = useState<{ x: any; y: any }[]>([]);

  //useEffect(() => {
  //  let liquid: any = [],
  //    pair: any = [];
  //
  //  tLiqState.map((state: any, index: any) => {
  //    liquid.push({
  //      y: state.totalLockedLiquidityUSD,
  //      x: index,
  //    });
  //
  //    pair.push({
  //      y: state.pairCount,
  //      x: index,
  //    });
  //  });
  //  setLiquidityUSD(liquid);
  //  setPairCount(pair);
  //}, [tLiqState]);

  const toggleSettingsModal = () => {
    setOpenSettingsModal(!openSettingsModal);
  };

  const dc = uncxState.total_supply * uncxState.price;
  const pd = deltaDirection(uncxState.price, uncxHistory.price);
  //const hd = deltaDirection(uncxState.holders, uncxHistory.holders);
  const vd = deltaDirection(uncxState.volume, uncxHistory.volume);
  const md = deltaDirection(uncxState.market_cap, uncxHistory.market_cap);

  const [uncxTradesData, setUncxTradesData] = useState([]);
  let buyArr = [];
  let sellArr = [];
  let presArr = [];

  useEffect(() => {
    if (uncxTrades && uncxTrades.length) {
      setUncxTradesData(
        uncxTrades
          .slice(0)
          .reverse()
          .map((item: any, index: number) => {
            if (item.amount0Out > 0 && item.amount1In > 0) {
              const totalUSDSpentB = ethPrice * item.amount1In;
              const totalUSDTradeB = totalUSDSpentB / item.amount0Out;
              const totalUSDwFeesB = totalUSDTradeB * 0.999;
              const totalEthSpendB = totalUSDwFeesB / ethPrice;
              return {
                timestamp: (
                  <Moment interval={0}>{item.timestamp * 1000}</Moment>
                ),
                side: "Buy",
                priceUsd: formatSupply(totalUSDwFeesB, 4, 4),
                priceEth: formatSupply(totalEthSpendB, 6, 6),
                amount: item.amount0Out.toFixed(0),
                totalEth: item.amount1In.toFixed(6),
                maker: item.to,
                other: item.transactionHash,
              };
            } else {
              const totalUSDSpentS = ethPrice * item.amount1Out;
              const totalUSDTradeS = totalUSDSpentS / item.amount0In;
              const totalUSDwFeesS = totalUSDTradeS * 0.999;
              const totalEthSpendS = totalUSDwFeesS / ethPrice;
              return {
                timestamp: (
                  <Moment interval={0}>{item.timestamp * 1000}</Moment>
                ),
                side: "Sell",
                priceUsd: formatSupply(totalUSDwFeesS, 4, 4),
                priceEth: formatSupply(totalEthSpendS, 6, 6),
                amount: item.amount0In.toFixed(0),
                totalEth: item.amount1Out.toFixed(6),
                maker: item.to,
                other: item.transactionHash,
              };
            }
          })
      );
    }
  }, [ethPrice]);

  presArr = uncxTrades.slice(Math.max(uncxTrades.length - 100, 0));
  buyArr = presArr.filter((e: any) => e.amount0In === 0);
  sellArr = presArr.filter((e: any) => e.amount1In === 0);

  const buyPr = parseFloat(((buyArr.length / presArr.length) * 100).toFixed(2));
  const sellPr = parseFloat(
    ((sellArr.length / presArr.length) * 100).toFixed(2)
  );
  const gaugePr = buyPr / 100.0;

  //const [crosshairValues1, setCrosshairValues1] = useState<any>();
  //const [crosshairValues2, setCrosshairValues2] = useState<any>();

  //const firstLiquidity = liquidityUSD[0]?.y;
  //const lastLiquidity = liquidityUSD[liquidityUSD.length - 1]?.y;
  //const liquidPercentage = deltaDirection(lastLiquidity, firstLiquidity);
  //const firstPairCount = pairCount[0]?.y;
  //const lastPairCount = pairCount[liquidityUSD.length - 1]?.y;
  //const pairPercentage = deltaDirection(lastPairCount, firstPairCount);

  const columns = useMemo<Column<UncxType>[]>(
    () => [
      {
        Header: `date (${z} ${zz})`,
        accessor: "timestamp",
      },
      {
        Header: "side",
        accessor: "side",
        Filter: BuyOrSellFilter,
        filter: "includes",
      },
      {
        Header: "price usd",
        accessor: "priceUsd",
        Filter: SliderColumnFilter,
        filter: filterGreaterThan,
        aggregate: roundedMedian,
        Aggregated: ({ value }) => `${value} (med)`,
      },
      {
        Header: "price eth",
        accessor: "priceEth",
        Filter: SliderColumnFilter,
        filter: filterGreaterThan,
        aggregate: roundedMedian,
        Aggregated: ({ value }) => `${value} (med)`,
      },
      {
        Header: "amt uncx",
        accessor: "amount",
        Filter: SliderColumnFilter,
        filter: filterGreaterThan,
        aggregate: roundedMedian,
        Aggregated: ({ value }) => `${value} (med)`,
      },
      {
        Header: "total eth",
        accessor: "totalEth",
        Filter: SliderColumnFilter,
        filter: filterGreaterThan,
        aggregate: roundedMedian,
        Aggregated: ({ value }) => `${value} (med)`,
      },
      {
        Header: "maker",
        accessor: "maker",
      },
      {
        Header: "ex",
        accessor: "exch",
      },
      {
        Header: "other",
        accessor: "other",
      },
    ],
    []
  );

  const data = useMemo<UncxType[]>(() => uncxTradesData, [uncxTradesData]);

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const filterTypes = useMemo(
    () => ({
      text: (rows: any, id: any, filterValue: any) => {
        return rows.filter((row: any) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }: any, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef: any = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return <input type="checkbox" ref={resolvedRef} {...rest} />;
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    pageOptions,
    state: { pageIndex, pageSize },
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable<UncxType>(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <main id="m">
      <div>
        <div className="cl">
          {/*
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Total Locked Liquidity</small>
                <h2>
                  <strong>
                    {lastLiquidity
                      ? formatCur(lastLiquidity, 2, 2)
                      : "Loading..."}
                  </strong>
                  {liquidPercentage ? (
                    <span className={liquidPercentage.color}>
                      {" "}
                      {liquidPercentage.caret} {liquidPercentage.delta}
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
              <Box w="100%" pl={22} pr={22}>
                <FlexibleXYPlot
                  height={350}
                  onMouseLeave={() => setCrosshairValues1([])}
                >
                  <HorizontalGridLines style={{ opacity: 0.5, width: "1px" }} />
                  <YAxis tickFormat={(tick) => `${tick / 1000000}M`} />
                  <XAxis hideTicks />
                  <LineSeries
                    color="#F20350"
                    data={liquidityUSD}
                    onNearestX={(datapoint, event) => {
                      setCrosshairValues1([datapoint]);
                    }}
                  />
                  <Crosshair values={crosshairValues1}>
                    <div>
                      <h3 className="chartNum">
                        Liquidity:{" "}
                        {` ${
                          crosshairValues1 && crosshairValues1.length > 0
                            ? crosshairValues1[0].y
                                .toString()
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                            : ""
                        }$ `}
                      </h3>
                    </div>
                  </Crosshair>
                </FlexibleXYPlot>
              </Box>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Total Locked Coin Pairs</small>
                <h2>
                  <strong>{formatSupply(lastPairCount, 0, 0)}</strong>
                  {pairPercentage ? (
                    <span className={pairPercentage.color}>
                      {" "}
                      {pairPercentage.caret} {pairPercentage.delta}
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
              <Box w="100%" pl={22} pr={22}>
                <FlexibleXYPlot
                  height={350}
                  onMouseLeave={() => setCrosshairValues2([])}
                >
                  <HorizontalGridLines style={{ opacity: 0.5, width: "1px" }} />
                  <YAxis />
                  <XAxis hideTicks />
                  <LineSeries
                    color="#F20350"
                    data={pairCount}
                    onNearestX={(datapoint, event) => {
                      setCrosshairValues2([datapoint]);
                    }}
                  />
                  <Crosshair values={crosshairValues2}>
                    <h3 className="chartNum">
                      PairCount:{" "}
                      {crosshairValues2 && crosshairValues2.length > 0
                        ? crosshairValues2[0].y
                        : ""}
                    </h3>
                  </Crosshair>
                </FlexibleXYPlot>
              </Box>
            </div>
          </div>
          */}
          {/*
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Staking Rewards Available</small>
                <h2>
                  <strong>Total Amount{liquidityState.UnlockDate}</strong>{" "}
                  <span className="gr">0.00%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Staking Rewards Distributed</small>
                <h2>
                  <strong>Rewards{liquidityState.LockID}</strong>{" "}
                  <span className="gr">0.00%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div style={{ height: "calc(50% - 10px)", marginBottom: "20px" }}>
              <div className="top">
                <small>Total Locked Liquidity</small>
                <h2>
                  <strong>Locked Amount{liquidityState.Owner}</strong>{" "}
                  <span className="gr">0.00%</span>
                </h2>
              </div>
            </div>
            <div style={{ height: "calc(50% - 10px)" }}>
              <div className="top">
                <small>Total Value Locked</small>
                <h2>
                  <strong>Vested Amount{liquidityState.USDValue}</strong>{" "}
                  <span className="gr">0.00%</span>
                </h2>
              </div>
            </div>
          </div>
        */}
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Price (24Hrs)</small>
                <h2>
                  <strong>
                    {uncxState.price
                      ? formatCur(uncxState.price, 2, 2)
                      : "Loading..."}
                  </strong>
                  {uncxState.price ? (
                    <span className={pd.color}>
                      {" "}
                      {pd.caret} {pd.delta}
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Volume (24Hrs)</small>
                <h2>
                  <strong>
                    {uncxState.volume
                      ? formatCur(uncxState.volume * uncxState.price, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.volume ? (
                    <span className={vd.color}>
                      {" "}
                      {vd.caret} {vd.delta}
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          {/*
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Holders (24Hrs)</small>
                <h2>
                  <strong>
                    {uncxState.holders
                      ? formatSupply(uncxState.holders, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.holders ? (
                    <span className={hd.color}>
                      {" "}
                      {hd.caret} {hd.delta}
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          */}
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>All-Time High</small>
                <h2>
                  <strong>
                    {uncxState.price
                      ? formatCur(uncxState.ath, 2, 2)
                      : "Loading..."}
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Market Cap (24Hrs)</small>
                <h2>
                  <strong>
                    {uncxState.market_cap
                      ? formatCur(uncxState.market_cap, 2, 2)
                      : "Loading..."}
                  </strong>
                  {uncxState.market_cap ? (
                    <span className={md.color}>
                      {" "}
                      {md.caret} {md.delta}
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Fully Diluted Market Cap</small>
                <h2>
                  <strong>{dc ? formatCur(dc, 2, 2) : "Loading..."}</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Circulating Supply</small>
                <h2>
                  <strong>{formatSupply(circSupply, 0, 0)}</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Total Supply</small>
                <h2>
                  <strong>
                    {uncxState.total_supply
                      ? formatSupply(uncxState.total_supply, 0, 0)
                      : "Loading..."}
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Maximum Supply</small>
                <h2>
                  <strong>{formatSupply(maxSupply, 0, 0)}</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl100">
            <div>
              <div className="top">
                <div className="tblc">
                  <div className="tclearfix">
                    <div className="tzleft">
                      <small>
                        {uncxTrades.length
                          ? "Last " +
                            formatSupply(uncxTrades.length, 0, 0) +
                            " Trades"
                          : "Loading..."}
                      </small>
                      <h2>
                        <strong>UNCX Trades</strong>
                      </h2>
                    </div>
                    <div className="tzcenter">&nbsp;</div>
                    <div className="tzright">
                      <GaugeChart
                        id="gauge-chart1"
                        animate={true}
                        nrOfLevels={2}
                        percent={isNaN(gaugePr) ? 0.5 : gaugePr}
                        needleColor="#f20350"
                        style={{ width: "33%", margin: "auto", top: "-25px" }}
                        colors={["#38ff17", "#ff052a"]}
                        arcsLength={[
                          isNaN(buyPr) ? 50 : buyPr,
                          isNaN(buyPr) ? 50 : sellPr,
                        ]}
                        hideText={true}
                        arcPadding={0.03}
                        cornerRadius={6}
                      />
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tleft">&nbsp;</div>
                    <div className="tcenter">&nbsp;</div>
                    <div className="tright">
                      <small>
                        <span className="gre">
                          <FaCaretUp />
                          &nbsp;{isNaN(buyPr) ? 50 : buyPr}%
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="red">
                          <FaCaretDown />
                          &nbsp;{isNaN(sellPr) ? 50 : sellPr}%
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tbleft">
                      <button
                        className="Settings-button"
                        onClick={toggleSettingsModal}
                      >
                        <FaCog className="settings-modal" />
                      </button>
                      <SettingsModal
                        openSettingsModal={openSettingsModal}
                        toggleSettingsModal={toggleSettingsModal}
                        allColumns={allColumns}
                        IndeterminateCheckbox={IndeterminateCheckbox}
                        getToggleHideAllColumnsProps={
                          getToggleHideAllColumnsProps
                        }
                      />
                    </div>
                    <div className="tbcenter">&nbsp;</div>
                    <div className="tbright">
                      <small>
                        {isNaN(sellPr) ? "Loading..." : "Buy / Sell Pressure"}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tbl">
                <div className="tblc">
                  <div>
                    <Table<UncxType>
                      getTableProps={getTableProps}
                      getTableBodyProps={getTableBodyProps}
                      headerGroups={headerGroups}
                      rows={page}
                      prepareRow={prepareRow}
                    />
                  </div>
                  <div className="pagination">
                    <button
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      {<FaAngleDoubleLeft />}
                    </button>
                    <button
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      {<FaAngleLeft />}
                    </button>
                    <button>
                      {pageIndex + 1} / {pageOptions.length}
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                      {<FaAngleRight />}
                    </button>
                    <button
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                    >
                      {<FaAngleDoubleRight />}
                    </button>
                    <span>
                      {" "}
                      page:{" "}
                      <input
                        className="page-input"
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                          const page = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          gotoPage(page);
                        }}
                      />
                      {"  "}
                    </span>
                    <select
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                      }}
                    >
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnicryptContent;
