import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useExpanded, useSortBy ,  
  useGlobalFilter} from "react-table";
import TableContainer from "@mui/material/TableContainer";
import MaUTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as Styles from "../shared/mystyle";
import { PRIMARY, COLORS } from "../shared/styles";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import DownloadIcon from '@mui/icons-material/Download';

export const TableComponent = ({ columns, data }) => {
  const getUpDownIcons = (isSorted, isSortedDesc, colIndex, colorStyles) => {
    let opacityUp = 0.5;
    let opacityDown = 0.5;
    if (isSorted) {
      if (isSortedDesc) {
        opacityDown = 1;
      } else {
        opacityUp = 1;
      }
    }
    return (
      <span style={{ ...Styles.UpDownIcon }}>
        <ArrowDropUpIcon
          sx={{ ...Styles.ArrowUpDownIcon, ...colorStyles }}
          style={{
            opacity: opacityUp,
            marginBottom: "-7px",
            marginTop: "-5px",
          }}
          data-testid={`sort-desc-${colIndex}`}
        />
        <ArrowDropDownIcon
          sx={{ ...Styles.ArrowUpDownIcon, ...colorStyles }}
          style={{ opacity: opacityDown, marginTop: "-6px" }}
          data-testid={`sort-asc-${colIndex}`}
        />
      </span>
    );
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    state: { pageIndex, pageSize },
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
      initialState: {
        sortBy: [
          {
            id: "Name",
            desc: false,
          },
        ],
      }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  return (
    <TableContainer style={{ ...Styles.TableContainer }}>
    <MaUTable style={{ ...Styles.TableHead }} {...getTableProps()}>
      <TableHead style={{ ...Styles.TableHeadBG }}>
        {headerGroups.map((headerGroup, i1) => (
          <TableRow key={i1} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i2) => {
              let { onClick } = {
                ...column.getSortByToggleProps(),
              };
              if (column.Header !== "Id") {
                return (
                  <TableCell
                    key={i2}
                    onClick={onClick}
                    style={{
                      padding: "7px",
                      ...Styles.TableHeaderFontStyle,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <span>{column.render("Header")}</span>
                      {column.render("Header") && (
                        <span>
                          {getUpDownIcons(
                            column.isSorted,
                            column.isSortedDesc,
                            i2,
                            {
                              ...(i2 === 0
                                ? { color: COLORS.PRIMARY[100] }
                                : {}),
                            }
                          )}
                        </span>
                      )}
                    </div>
                  </TableCell>
                );
              }
            })}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow key={i} {...row.getRowProps()}>
              {row.cells.map((cell, i2) => {
                if (row.cells[i2].column.Header !== "Id") {
                  if (row.cells.length - 1 === i2) {
                    return (
                      <TableCell key={i2} {...cell.getCellProps()}>
                        {
                          <div>
                            <span
                            >
                              <EditIcon
                                color="secondary"
                                fontSize="small"
                              />
                            </span>
                            <span
                            >
                              <DownloadIcon
                                color="secondary"
                                fontSize="medium"
                              />
                            </span>
                            <span
                              style={{ paddingLeft: "5px" }}
                            >
                              <DeleteIcon
                                color="secondary"
                                fontSize="small"
                              />
                            </span>

                          </div>
                        }
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={i2} {...cell.getCellProps()}>
                      {
                        cell.render("Cell")
                        //cell.value
                      }
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  </TableContainer>
  )
}
export default TableComponent;