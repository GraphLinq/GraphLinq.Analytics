/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
  Column,
} from "react-table";
import {
  POST_SELECTED_GLQ,
  POST_HISTORY_GLQ,
  POST_GLQ_TRADES,
  POST_SELECTED_ETH_PRICE,
} from "../../store/actionNames/glqAction";
import { RootState } from "../../store/reducers";
import "../../app.css";
import { formatCur, formatSupply, deltaDirection } from "../../utils";
import GaugeChart from "react-gauge-chart";
import Moment from "react-moment";
import moment from "moment-timezone";
import jstz from "jstz";
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

interface GlqProps {}

type GlgDataType = {
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

const circSupply = 340000000;
//const maxSupply = 650000000;
//const burnedTotal = 0;


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
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

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

const GraphLinqContent: React.FC<GlqProps> = () => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});
  const glqHistory = useSelector((state: RootState) => state.glqHistory || {});
  const glqTrades = useSelector(
    (state: RootState) => state.postGlqTradesSelect || {}
  );
  const ethPrice = useSelector((state: RootState) => state.ethPriceSelect || 0);

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState });
    dispatch({ type: POST_HISTORY_GLQ, payLoad: glqHistory });
    dispatch({ type: POST_GLQ_TRADES, payLoad: glqTrades });
    dispatch({ type: POST_SELECTED_ETH_PRICE, payLoad: ethPrice });
  }, []);

  const [openSettingsModal, setOpenSettingsModal] = useState<boolean>(false);

  const toggleSettingsModal = () => {
    setOpenSettingsModal(!openSettingsModal);
  };

  const dc = glqState.totalSupply * glqState.rate;
  //const tb = maxSupply - glqState.totalSupply;
  const pd = deltaDirection(glqState.rate, glqHistory.rate);
  //const hd = deltaDirection(glqState.holders, glqHistory.holders);
  const vd = deltaDirection(glqState.volume, glqHistory.volume);
  const md = deltaDirection(glqState.cap, glqHistory.cap);

  const [glqTradesData, setGlqTradesData] = useState([]);
  let buyArr = [];
  let sellArr = [];
  let presArr = [];

  useEffect(() => {
    if (glqTrades && glqTrades.length) {
      setGlqTradesData(
        glqTrades
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

  let gaugePr = 0.5;
  let buyPr = 50;
  let sellPr = 50;
  if (glqTrades.length > 0) {
    presArr = glqTrades.slice(Math.max(glqTrades.length - 100, 0));
    buyArr = presArr.filter((e: any) => e.amount0In === 0);
    sellArr = presArr.filter((e: any) => e.amount1In === 0);

    buyPr = parseFloat(((buyArr.length / presArr.length) * 100).toFixed(2));
    sellPr = parseFloat(((sellArr.length / presArr.length) * 100).toFixed(2));
    gaugePr = buyPr / 100.0;
  }
  const columns = useMemo<Column<GlgDataType>[]>(
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
        Header: "amount glq",
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
        Header: "MAKER",
        accessor: "maker",
      },
      {
        Header: "EX",
        accessor: "exch",
      },
      {
        Header: "OTHER",
        accessor: "other",
      },
    ],
    []
  );

  const data = useMemo<GlgDataType[]>(() => glqTradesData, [glqTradesData]);

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
  } = useTable<GlgDataType>(
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
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Price (24Hrs)</small>
                <h2>
                  <strong>
                    {glqState.rate
                      ? formatCur(glqState.rate, 5, 5)
                      : "Loading..."}
                  </strong>
                  {glqState.rate ? (
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
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Volume (24Hrs)</small>
                <h2>
                  <strong>
                    {glqState.volume
                      ? formatCur(glqState.volume, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.volume ? (
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
          {/*<div className="blc cl25">
            <div>
              <div className="top">
                <small>Holders (24Hrs)</small>
                <h2>
                  <strong>
                    {glqState.holders
                      ? formatSupply(glqState.holders, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.holders ? (
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
          </div> */}
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>All-Time High</small>
                <h2>
                  <strong>
                    {glqState.allTimeHighUSD
                      ? formatCur(glqState.allTimeHighUSD, 5, 5)
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
                    {glqState.cap
                      ? formatCur(glqState.cap, 2, 2)
                      : "Loading..."}
                  </strong>
                  {glqState.cap ? (
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
          { /*<div className="blc cl25x">
            <div>
              <div className="top">
                <small>Burned</small>
                <h2>
                  <strong>{tb ? formatSupply(tb, 0, 0) : "Loading..."}</strong>
                </h2>
              </div>
            </div>
                  </div> */}
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Circulating Supply</small>
                <h2>
                  <strong>{formatSupply(circSupply, 0, 0)}</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Supply</small>
                <h2>
                  <strong>
                    {glqState.totalSupply
                      ? formatSupply(glqState.totalSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Maximum Supply</small>
                <h2>
                <strong>
                    {glqState.totalSupply
                      ? formatSupply(glqState.totalSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl100">
            <div>
              <div>
                <div className="top">
                  <div className="tclearfix">
                    <div className="tzleft">
                      <small>
                        {glqTrades.length
                          ? "Last " +
                            formatSupply(glqTrades.length, 0, 0) +
                            " Trades"
                          : "Loading..."}
                      </small>
                      <h2>
                        <strong>GLQ Trades</strong>
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
                    <Table<GlgDataType>
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

export default GraphLinqContent;
