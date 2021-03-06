import React, { useEffect, useState } from "react";
import { UseTableInstanceProps } from "react-table";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { formatSupply } from "../utils";
import { usePrevious } from "../hooks";
import { truncateString } from "../utils";

export interface TableNewProps<T extends object>
  extends Pick<
    UseTableInstanceProps<T>,
    | "getTableProps"
    | "headerGroups"
    | "getTableBodyProps"
    | "prepareRow"
    | "rows"
  > {}

export function Table<T extends object>(props: TableNewProps<T>) {
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    props;

  const [count, setCount] = useState(0);
  const prevCount: number = usePrevious<number>(count);

  useEffect(() => {
    setCount(rows.length);
  }, [rows]);

  function rederCell(item: any) {
    if (item.column.id === "timestamp") {
      return item.row.values["timestamp"];
    } else if (item.column.id === "side") {
      if (item.row.values["side"] === "Buy") {
        return <span className="gre">Buy</span>;
      }
      return <span className="red">Sell</span>;
    } else if (item.column.id === "maker") {
      const val = item.row.values["maker"];
      return (
        <a
          rel="noreferrer"
          href={`https://etherscan.io/address/${val}`}
          target="_blank"
        >
          {truncateString(val, 5)}
        </a>
      );
    } else if (item.column.id === "exch") {
      return (
        <a
          rel="noreferrer"
          target="_blank"
          href="https://uniswap.exchange/swap/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24"
        >
          &#129412;
        </a>
      );
    } else if (item.column.id === "other") {
      return (
        <a
          className="etherscan"
          rel="noreferrer"
          target="_blank"
          href={`https://etherscan.io/tx/${item.row.values["other"]}`}
        >
          <img alt="" src="/template/img/etherscan-white.png" />
        </a>
      );
    } else if (item.column.id === "amount") {
      return formatSupply(item.row.values["amount"], 0, 0);
    } else if (item.column.id === "totaleth") {
      return formatSupply(item.row.values["totaleth"], 6, 6);
    }
    return item.render("Cell");
  }

  function renderHeader(item: any) {
    if (item.id === "exch" || item.id === "other") {
      return (
        <th
          {...item.getHeaderProps()}
          className="th-disable"
          style={{ cursor: "not-allowed" }}
        >
          {item.render("Header")}
        </th>
      );
    }

    if (item.id === "timestamp") {
      return (
        <th
          {...item.getHeaderProps()}
          className="th-visable"
          style={{ fontWeight: "900", cursor: "pointer" }}
        >
          <div>
            <span {...item.getSortByToggleProps()}>
              {item.render("Header")}
              <span style={{ color: "red", marginLeft: "3px" }}>
                {item.isSorted ? (
                  item.isSortedDesc ? (
                    <FaSortAmountDown />
                  ) : (
                    <FaSortAmountUp />
                  )
                ) : (
                  ""
                )}
              </span>
            </span>
          </div>
        </th>
      );
    }

    if (item.isSorted || item.isSortedDesc) {
      return (
        <th
          {...item.getHeaderProps()}
          className="th-visable"
          style={{ fontWeight: "900", cursor: "pointer" }}
        >
          <div>
            <span
              style={{ color: "red", marginLeft: "3px" }}
              {...item.getSortByToggleProps()}
            >
              {item.render("Header")}
              <span style={{ color: "red", marginLeft: "3px" }}>
                {item.isSorted ? (
                  item.isSortedDesc ? (
                    <FaSortAmountDown />
                  ) : (
                    <FaSortAmountUp />
                  )
                ) : (
                  ""
                )}
              </span>
            </span>
          </div>
          <div className="th-filter">
            {item.canFilter ? item.render("Filter") : null}
          </div>
        </th>
      );
    }

    return (
      <th
        {...item.getHeaderProps()}
        className="th-visable"
        style={{ fontWeight: "900", cursor: "pointer" }}
      >
        <div>
          <span
            style={{ color: "red", marginLeft: "3px" }}
            {...item.getSortByToggleProps()}
          >
            {item.render("Header")}
          </span>
        </div>
        <div className="th-filter">
          {item.canFilter ? item.render("Filter") : null}
        </div>
      </th>
    );
  }

  function getRows(row: any, index: number) {
    const isNew = rows.length - prevCount > index;
    return (
      <tr
        className={`ar ${isNew ? "ar-new" : ""}`}
        {...row.getRowProps()}
        key={index}
      >
        {row.cells.map((cell: any) => {
          return <td {...cell.getCellProps()}>{rederCell(cell)}</td>;
        })}
      </tr>
    );
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => renderHeader(column))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index: number) => {
          prepareRow(row);
          return getRows(row, index);
        })}
      </tbody>
    </table>
  );
}
