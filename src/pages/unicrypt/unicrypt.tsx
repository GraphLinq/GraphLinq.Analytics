import React, { useState, useEffect, useMemo } from 'react'
import { POST_SELECTED_UNCL, POST_SELECTED_UNCX, POST_TOTAL_LIQUIDITY, POST_LIQUIDITY, POST_UNCX_TRADES, POST_HISTORY_UNCX, POST_SELECTED_ETH_PRICE } from '../../store/actionNames/glqAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination, Column } from "react-table";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, Crosshair, VerticalGridLines, VerticalBarSeries, LineSeries, AreaSeries, FlexibleXYPlot, FlexibleWidthXYPlot } from 'react-vis';
import { Box } from '@chakra-ui/react';
import { formatCur, formatSupply, deltaDirection, truncateString } from '../../utils';
import Moment from 'react-moment';
import moment from 'moment-timezone';
import jstz from 'jstz';
import { usePrevious } from '../../hooks';
import Loader from "react-loader-spinner";
import GaugeChart from 'react-gauge-chart';
import { FaCaretUp, FaCaretDown, FaCog, FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaAngleLeft, FaSortAmountDown, FaSortAmountUpAlt, FaSortAmountDownAlt, FaSortAmountUp } from 'react-icons/fa';
import { Table } from "../../components/table";


interface UnclProps {

}

type UncxType = {
  timestamp: string;
  side: string;
  priceUsd: string;
  priceEth: string;
  amountglq: number;
  totaleth: string;
  maker: string;
  exch: string;
  other: string;
}

Moment.globalFormat = "YYYY-MM-DD HH:mm:ss";
const m  = moment();
const tz = jstz.determine().name();
const z  = moment().format("Z");
const zz = m.tz(tz).zoneAbbr();

const circSupply = 36163;
const maxSupply  = 47650;

let pow = (Math.pow(10, 8));

interface ColumnType {
  column: {
    filterValue: any,
    setFilter: any,
    preFilteredRows: any,
    id: any
  }
}

const BuyOrSellFilter = ({column}: ColumnType) => {
  const {filterValue, setFilter, preFilteredRows, id} = column;
  const options = useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id])
    })
    return [...(options as any).values()]
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option: any, i: number) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

interface TotalEthFilterType {
  column: {
    filterValue: any,
    preFilteredRows: any, 
    setFilter: any,
    id: any
  }
}

function TotalEthFilter({column}: TotalEthFilterType) {
  const { filterValue, setFilter, preFilteredRows, id} = column;
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach((row: any) => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div>
      <input
        className="rage-input"
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <div className="totaleth-button" onClick={() => setFilter(undefined)}>Off</div>
    </div>
  )
}

interface DefaultColumnType {
  column: {
    filterValue: any,
    preFilteredRows: any, 
    setFilter: any
  }
}

function DefaultColumnFilter({column}: DefaultColumnType) {
  const { filterValue, preFilteredRows, setFilter} = column;
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

const UnicryptContent: React.FC<UnclProps> = ({ }) => {

  const dispatch    = useDispatch();
  const unclState   = useSelector((state: RootState) => state.unclSelect || {});
  const uncxState   = useSelector((state: RootState) => state.uncxSelect || {});
  const tLiqState   = useSelector((state: RootState) => state.totalLiquiditySelect || {});
  const liqState    = useSelector((state: RootState) => state.liquiditySelect[0] || {});
  const uncxHistory = useSelector((state: RootState) => state.uncxHistory || {});
  const uncxTrades  = useSelector((state: RootState) => state.postUncxTradesSelect);
  const ethPrice    = useSelector((state: RootState) => state.ethPriceSelect);

  useEffect(() => {
    dispatch({ type: POST_SELECTED_UNCL, payLoad: unclState })
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState })
    dispatch({ type: POST_TOTAL_LIQUIDITY, payLoad: tLiqState })
    dispatch({ type: POST_LIQUIDITY, payLoad: liqState })
    dispatch({ type: POST_HISTORY_UNCX, payLoad: uncxHistory })
    dispatch({ type: POST_UNCX_TRADES, payLoad: uncxTrades })
    dispatch({ type: POST_SELECTED_ETH_PRICE, payLoad: ethPrice})
  }, [])

  const dc = uncxState.total_supply * uncxState.price;
  const pd = deltaDirection(uncxState.price, uncxHistory.price);
  const hd = deltaDirection(uncxState.holders, uncxHistory.holders);
  const vd = deltaDirection(uncxState.volume, uncxHistory.volume);
  const md = deltaDirection(uncxState.market_cap, uncxHistory.market_cap);

  let uncxTradesData: UncxType[] = [];
  let buyArr  = [];
  let sellArr = [];

  if (uncxTrades && uncxTrades.length) {
    uncxTradesData = uncxTrades.slice(0).reverse().map((item: any, index: number) => {
      if ((item.amount0Out > 0) && (item.amount1In > 0)) {
        return {
          // timestamp: item.timestamp * 1000,
          timestamp: (<Moment interval={0}>
            {item.timestamp * 1000}
				    </Moment>),
          side: 'Buy',
          priceUsd: '-',
          priceEth: '-',
          amountglq: item.amount0Out.toFixed(0),
          totaleth: item.amount1In.toFixed(6),
          maker: item.to,
          other: '-'
        }
      }
      else {
        return {
          // timestamp: item.timestamp * 1000,
          timestamp: (<Moment interval={0}>
            {item.timestamp * 1000}
				    </Moment>),
          side: 'Sell',
          priceUsd: '-',
          priceEth: '-',
          amountglq: item.amount0In.toFixed(0),
          totaleth: item.amount1Out.toFixed(6),
          maker: item.to,
          other: '-'
        }
      }

    })
    buyArr  = uncxTrades.filter((e: any) => (e.amount0In === 0))
    sellArr = uncxTrades.filter((e: any) => (e.amount1In === 0))
  }

  const buyPr   = parseFloat(((buyArr.length / uncxTrades.length) * 100).toFixed(2));
  const sellPr  = parseFloat(((sellArr.length / uncxTrades.length) * 100).toFixed(2));
  const gaugePr = buyPr / 100.0;

  const newArr = tLiqState.map((item: any, index: number) => {
    return { x: index, y: parseFloat(item).toFixed(2) }
  });

  const reArr = tLiqState.map((item: any, index: number) => {
    return { x: index, y: parseFloat(item).toFixed(2) }
  });

  const totalLiquidityData = [
    newArr, reArr
  ];

  const [crosshairValues, setCrosshairValues] = useState<any[]>(totalLiquidityData);
  const [iscrosshair, setIscrosshair] = useState(false);

  const yMinValue = (Math.floor(Math.min(...tLiqState) / 100000000) * 100000000);
  const yMaxValue = Math.ceil(Math.max(...tLiqState) / 100000000) * 100000000;
  const xMaxValue = (Math.floor(newArr.length / 20) + 1) * 20;

  function abbrNum(num: any) {
    // 2 decimal places => 100, 3 => 1000, etc
    let decPlaces = Math.pow(10, 2);

    // Enumerate number abbreviations
    let abbrev = ["K", "M", "B", "T"];

    // Go through the array backwards, so we do the largest first
    for (let i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      let size = Math.pow(10, (i + 1) * 3);
      // If the number is bigger or equal do the abbreviation
      if (size <= num) {
        num = Math.round(num * decPlaces / size) / decPlaces;
        if ((num == 1000) && (i < abbrev.length - 1)) {
          num = 1;
          i++;
        }
        num += abbrev[i];
        break;
      }
    }
    return num;
  }

  const columns = React.useMemo<Column<UncxType>[]>(
    () => [
      {
        Header: `date (${z} ${zz})`,
        accessor: 'timestamp', // accessor is the "key" in the data
      },
      {
        Header: 'type',
        accessor: 'side',
        Filter: BuyOrSellFilter,
        filter: 'includes'
      },
      {
        Header: 'price usd',
        accessor: 'priceUsd',
      },
      {
        Header: 'price eth',
        accessor: 'priceEth',
      },
      {
        Header: 'amount uncx',
        accessor: 'amountglq',
        //Filter: TotalEthFilter,
        //filter: 'equals',
      },
      {
        Header: 'total eth',
        accessor: 'totaleth',
      },
      {
        Header: 'maker',
        accessor: 'maker',
      },
      {
        Header: 'ex',
        accessor: 'exch',
      },
      {
        Header: 'other',
        accessor: 'other',
      },
    ],
    []
  )

  const data = React.useMemo<UncxType[]>(
    () => uncxTradesData,
    [uncxTradesData.length]
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }), []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows: any, id: any, filterValue: any) => {
        return rows.filter((row: any) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
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

    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable<UncxType>(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      defaultColumn,
      filterTypes,
    },  useFilters, useGlobalFilter, useSortBy, usePagination,
  );

  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Value Locked</small>
                <h2>
                  <strong>
                    {
                    formatCur(liqState.USDValue, 2, 2)
                    }
                  </strong> <span className="gr">+4.73%</span>
                </h2>
              </div>
              <Box w="100%" pl={8}>
                <FlexibleWidthXYPlot
                  height={250}
                  xDomain={[0, xMaxValue]}
                  yDomain={[yMinValue, yMaxValue]}
                  onMouseLeave={() => setIscrosshair(false)}
                  onMouseEnter={() => setIscrosshair(true)}
                >
                  <LineSeries
                    curve={'curveLinear'}
                    data={totalLiquidityData[0]}
                    color="#f20350"
                    onNearestX={(value, { index }) => setCrosshairValues(totalLiquidityData.map(d => d[index]))}
                  />
                  <YAxis  style={{text: {fill: '#b7aed6', fontWeight: 400}}}  tickPadding={2} title="Value" tickLabelAngle={0} tickFormat={v => `${abbrNum(v)}`} tickValues={[yMinValue, 4.5 * pow, 5 * pow, 6 * pow, 7 * pow, 8 * pow, 9 * pow, 9.5 * pow, yMaxValue]} />
                  <XAxis hideTicks />
                  {iscrosshair && <Crosshair values={crosshairValues}>
                    <div>
                      <h3>{abbrNum(crosshairValues[1].y)}</h3>
                    </div>
                  </Crosshair>
                  }

                </FlexibleWidthXYPlot>
              </Box>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Farming Liquidity</small>
                <h2>
                  <strong>Chart Amount{/*liquidityState.Amount*/}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
              <div className="chart">
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Staked Liquidity</small>
                <h2>
                  <strong>Chart Amount{/*liquidityState.InitialAmount*/}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
              <div className="chart">
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Staking Rewards Available</small>
                <h2>
                  <strong>Total Amount{/*liquidityState.UnlockDate*/}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Staking Rewards Distributed</small>
                <h2>
                  <strong>Rewards{/*liquidityState.LockID*/}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div style={{ height: "calc(50% - 10px)", marginBottom: '20px' }}>
              <div className="top">
                <small>Total Locked Liquidity</small>
                <h2>
                  <strong>Locked Amount{/*liquidityState.Owner*/}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
            <div style={{ height: "calc(50% - 10px)" }}>
              <div className="top">
                <small>Total Value Locked</small>
                <h2>
                  <strong>Vested Amount{/*liquidityState.USDValue*/}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Price (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      uncxState.price ? formatCur(uncxState.price, 2, 2) : 'Loading...'
                    }
                  </strong>
                  {uncxState.price
                    ? <span className={pd.color}> {pd.caret} {pd.delta}</span>
                    : ''
                  }
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
                    {
                      uncxState.volume ? formatCur(uncxState.volume * uncxState.price, 0, 0) : 'Loading...'
                    }
                  </strong>
                  {uncxState.volume
                    ? <span className={vd.color}> {vd.caret} {vd.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Holders (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      uncxState.holders ? formatSupply(uncxState.holders, 0, 0) : 'Loading...'
                    }
                  </strong>
                  {uncxState.holders
                    ? <span className={hd.color}> {hd.caret} {hd.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>All-Time High</small>
                <h2>
                  <strong>
                    {/*
                      uncxState.price ? formatCur(uncxState.ath, 2, 2) : 'Loading...'
                    */}
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
                    {
                      uncxState.market_cap ? formatCur(uncxState.market_cap, 2, 2) : 'Loading...'
                    }
                  </strong>
                  {uncxState.market_cap
                    ? <span className={md.color}> {md.caret} {md.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Fully Diluted Market Cap</small>
                <h2>
                  <strong>
                    {
                      dc ? formatCur(dc, 2, 2) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Circulating Supply</small>
                <h2>
                  <strong>
                    {
                      formatSupply(circSupply, 0, 0)
                    }
                  </strong>
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
                    {
                      uncxState.total_supply ? formatSupply(uncxState.total_supply, 0, 0) : 'Loading...'
                    }
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
                  <strong>
                    {
                      formatSupply(maxSupply, 0, 0)
                    }
                  </strong>
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
                        {
                          uncxTrades.length ? 'Last ' + formatSupply(uncxTrades.length, 0, 0) + ' Trades' : 'Loading...'
                        }
                      </small>
                      <h2>
                        <strong>UNCX Trades</strong>
                      </h2>
                    </div>
                    <div className="tzcenter">
                      &nbsp;
                    </div>
                    <div className="tzright">
                      <GaugeChart id="gauge-chart1"
                        animate={true}
                        nrOfLevels={2}
                        percent={(isNaN(gaugePr) ? .5 : gaugePr)}
                        needleColor="#f20350"
                        style={{ width: '33%', margin: 'auto', top: '-25px' }}
                        colors={['#38ff17', '#ff052a']}
                        arcsLength={[(isNaN(buyPr) ? 50 : buyPr), (isNaN(buyPr) ? 50 : sellPr)]}
                        hideText={true}
                        arcPadding={0.06}
                        cornerRadius={8}
                      />
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tleft">
                      &nbsp;
                    </div>
                    <div className="tcenter">
                      &nbsp;
                    </div>
                    <div className="tright">
                      <small>
                        <span className="gre"><FaCaretUp />&nbsp;{(isNaN(buyPr) ? 50 : buyPr)}%</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="red"><FaCaretDown />&nbsp;{(isNaN(sellPr) ? 50 : sellPr)}%</span>
                      </small>
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tbleft">
                      &nbsp;
                    </div>
                    <div className="tbcenter">
                     &nbsp;
                    </div>
                    <div className="tbright">
                      <small>{(isNaN(sellPr) ? 'Loading...' : 'Buy / Sell Pressure')}</small>
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
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                      {<FaAngleDoubleLeft />}
                    </button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                      {<FaAngleLeft />}
                    </button>
                    <button>
                      {pageIndex + 1} / {pageOptions.length}
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                      {<FaAngleRight />}
                    </button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                      {<FaAngleDoubleRight />}
                    </button>
                    <span>
                      {' '} page:{' '}
                      <input
                        className="page-input"
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                          const page = e.target.value ? Number(e.target.value) - 1 : 0
                          gotoPage(page)
                        }}
                      />{'  '}
                    </span>
                    <select
                      value={pageSize}
                      onChange={e => { setPageSize(Number(e.target.value)) }}
                    >
                      {[10, 20, 30, 40, 50].map(pageSize => (
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
}

export default UnicryptContent;
