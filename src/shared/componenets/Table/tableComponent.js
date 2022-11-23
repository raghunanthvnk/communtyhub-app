import * as React from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
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
import * as Styles from "../../mystyle";
import { COLORS } from "../../styles";
import DownloadIcon from "@mui/icons-material/Download";
import TablePagination from "@mui/material/TablePagination";
import MyDataFilter from "./mydatafilter";
import MyPagination from "./mypagination";
import Avatar from "../../UI/Avatar";
export const TableComponent = ({
  columns,
  data,
  DeleteRecordHandler,
  EditRecordHandler,
  DownloadRecordHandler,
  EditIconreq,
  DeleteIconreq,
  DownloadIconreq,
}) => {
  const isDeleteIcon = DeleteIconreq === "true";
  const isDownloadIcon = DownloadIconreq === "true";
  const isEditIcon = EditIconreq === "true";
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
  const handleChangePage = (_event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };
  const {
    getTableProps,
    headerGroups,
    setGlobalFilter,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
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
        pageSize: 5,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <div>
      {/* <MyDataFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      /> */}
      <TableContainer style={{ ...Styles.TableContainer }}>
        <MaUTable style={{ ...Styles.TableHead }} {...getTableProps()}>
          <TableHead style={{ ...Styles.TableHeadBG }}>
            {headerGroups.map((headerGroup, i1) => (
              <TableRow key={i1} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i2) => {
                  let { onClick } = {
                    ...column.getSortByToggleProps(),
                  };
                  if (column.Header?.toLowerCase() !== "id") {
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
                    if (
                      row.cells[i2].column.Header?.toLowerCase() === "image"
                    ) {
                      return (
                        <TableCell
                          key={i2}
                          {...cell.getCellProps()}
                          style={{ width: "0%" }}
                        >
                          {
                            //cell.render("Cell")
                            //cell.value
                            <Avatar
                              image={`${process.env.REACT_APP_COMMUNITYHUBAPI_URL}Images/${row.original.Image}`}
                              alt={row.original?.name}
                            />
                          }
                        </TableCell>
                      );
                    }
                    if (row.cells[i2].column.Header?.toLowerCase() !== "id") {
                      if (row.cells.length - 1 === i2) {
                        return (
                          <TableCell key={i2} {...cell.getCellProps()}>
                            {
                              <div>
                                {isDownloadIcon ? (
                                  <span
                                    onClick={() =>
                                      DownloadRecordHandler(row.original.id)
                                    }
                                  >
                                    <DownloadIcon
                                      color="secondary"
                                      fontSize="medium"
                                    />
                                  </span>
                                ) : (
                                  ""
                                )}
                                {isEditIcon ? (
                                  <span
                                    onClick={() =>
                                      EditRecordHandler(row.original.id)
                                    }
                                  >
                                    <EditIcon
                                      color="secondary"
                                      fontSize="medium"
                                    />
                                  </span>
                                ) : (
                                  ""
                                )}
                                {isDeleteIcon ? (
                                  <span
                                    style={{ paddingLeft: "5px" }}
                                    onClick={() =>
                                      DeleteRecordHandler(row.original.id)
                                    }
                                  >
                                    <DeleteIcon
                                      color="secondary"
                                      fontSize="medium"
                                    />
                                  </span>
                                ) : (
                                  ""
                                )}
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
      <div
        id="myteam-paginationdiv"
        data-testid="myteam-paginationdiv"
        style={{ ...Styles.MyteamPaginationNonSticky }}
      >
        <TablePagination
          style={{ borderBottom: "none" }}
          rowsPerPageOptions={[]}
          count={data.length}
          rowsPerPage={pageSize}
          labelRowsPerPage={""}
          page={pageIndex}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={MyPagination}
        />
      </div>
    </div>
  );
};
export default TableComponent;
