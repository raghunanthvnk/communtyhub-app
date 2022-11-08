import * as React from "react";
// import Modal from '@mui/material/Modal'
import * as Styles from "../shared/mystyle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MaUTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MyDataFilter from "../shared/componenets/mydatafilter";
import MyPagination from "../shared/componenets/mypagination";
import {
  getHubCategoryList,
  deleteHubCategory,editHubCategory
} from "../services/hubcategory-service";
import { useQuery } from "react-query";
import _ from "lodash";
import { PRIMARY, COLORS } from "../shared/styles";
import TableContainer from "@mui/material/TableContainer";
import Modal from "../shared/UI/Modal/MaterialModal";
// import Modal from "react-modal";
import CustomButton from "../shared/UI/CustomButton/CustomButton";
import CustomTextInput from "../shared/UI/CustomTextInput/CustomTextInput";
import CustomCheckbox from "../shared/UI/CustomCheckbox";
export const SUPERVISOR_API_KEY = "SUPERVISOR_API_KEY";

const HubCategoryList = (props) => {
  const defaultValues = {
    name: "",
    description: "",
    isactive: false,
    isdefaultbookingtime: true,
    updatedby:""
  };
  const [deletePopup, setDeletePopup] = React.useState(false);
  const [editPopup, setEditPopup] = React.useState(false);
  const [hubCategoryId, setHubCategoryId] = React.useState("");
  const [formValues, setFormValues] = React.useState(defaultValues);
  const { data, isLoading ,refetch } = useQuery([SUPERVISOR_API_KEY], async () =>
    getHubCategoryList()
  );
  if (isLoading) {
    return "<h2>Loading..</h2>";
  }
  const DeleteHubCategory = (resTrue, id) => {
    setDeletePopup(resTrue);
    setHubCategoryId(id);
  };
  const cancelDeleteHandler = () => {
    setDeletePopup(false);
  };
  const DeleteHandler = () => {
    setDeletePopup(false);
    deleteHubCategory(hubCategoryId);
    setHubCategoryId("");
  };

  const EditHubCategory = (id) => {
    let hubcategorydata=  data.categoryList.find(x => x.id === id)
    
    setFormValues({name:hubcategorydata.name,description:hubcategorydata.description,
      isactive:hubcategorydata.isactive,
      isdefaultbookingtime:hubcategorydata.isdefaultbookingtime,
      updatedby:"Admin"
    });
    setEditPopup(true);
    setHubCategoryId(id);
    refetch();
  };
  const cancelEditHandler = () => {
    setEditPopup(false);
  };
  const EditHandler = () => {

    setEditPopup(false);
    editHubCategory(hubCategoryId,formValues)
    setHubCategoryId("");
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const flattenData = (data) => {
    if (data) {
      _.forEach(data?.categoryList, (_item, key) => {
        _item.isactive = _item.isactive.toString();
        _item.isdefaultbookingtime = _item.isdefaultbookingtime.toString();
      });
    }
    return data?.categoryList;
  };
  const createColumns = (data) => {
    let resData = [];
    if (data) {
      _.forEach(data?.categoryList, (_item, key) => {
        Object.keys(_item).forEach(function (k) {
          const isColumnExist = _.some(resData, (item) => item.accessor === k);
          if (!isColumnExist) {
            let table_obj = {};
            table_obj["Header"] = table_obj["accessor"] = k;
            resData.push(table_obj);
          }
        });
      });
      if (resData.length === 1) {
        resData.push({
          Header: "",
          accessor: "NoData",
        });
      } else {
        resData.push({
          Header: "Actions",
          accessor: "",
        });
      }
    }

    return resData;
  };
  return (
    <React.Fragment>
      <Modal
        header="Are you sure?"
        isOpen={deletePopup}
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <CustomButton
              data-testid="catgory-cancel"
              label="Cancel"
              variant="contained"
              color={PRIMARY[100]}
              style={{
                float: "right",
              }}
              onClick={() => cancelDeleteHandler()}
            />
            <span></span>
            <CustomButton
              data-testid="catgory-delete"
              label="Delete"
              variant="contained"
              color={COLORS.RED}
              style={{
                float: "right",
                marginRight: "16px",
              }}
              onClick={() => DeleteHandler()}
            />
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this hub category? Please note that
          it can't be undone thereafter.
        </p>
      </Modal>

      <Modal
        header="Edit Hub Category"
        isOpen={editPopup}
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <CustomButton
              data-testid="catgory-cancel"
              label="Cancel"
              variant="contained"
              color={PRIMARY[100]}
              style={{
                float: "right",
              }}
              onClick={() => cancelEditHandler()}
            />
            <span></span>
            <CustomButton
              data-testid="catgory-delete"
              label="Edit"
              variant="contained"
              color={PRIMARY[100]}
              style={{
                float: "right",
                marginRight: "16px",
              }}
              onClick={() => EditHandler()}
            />
          </React.Fragment>
        }
      >
        <CustomTextInput
          name={"name"}
          label={"Name"}
          value={formValues.name}
          onChange={handleInputChange}
          size={"small"}
          error={formValues.nameError}
          isRequired={true}
        />
        <div>
        <CustomTextInput
          name={"description"}
          label={"Description"}
          value={formValues.description}
          onChange={handleInputChange}
          size={"small"}
          error={formValues.descriptionError}
          isRequired={true}
        />
        </div>
        <div>
          <CustomCheckbox
            label="IsActive"
            value={formValues.isactive}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <CustomCheckbox
            label="isDefaultBookingTime"
            value={formValues.isdefaultbookingtime}
            onChange={handleInputChange}
          />
        </div>
      </Modal>

      <Table
        data-testid="myTeamTable"
        columns={createColumns(data)}
        data={flattenData(data)}
        DeleteHubCategory={DeleteHubCategory}
        EditHubCategory={EditHubCategory}
      />
    </React.Fragment>
  );
};

function Table({
  columns,
  data,
  DeleteHubCategory,
  EditHubCategory,
  isDefaultView = false,
}) {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
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
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleChangePage = (_event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };

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

  return (
    <div style={{ minHeight: "448px" }}>
      <MyDataFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <TableContainer style={{ ...Styles.TableContainer }}>
        <MaUTable style={{ ...Styles.TableHead }} {...getTableProps()}>
          <TableHead style={{ ...Styles.TableHeadBG }}>
            {headerGroups.map((headerGroup, i1) => (
              <TableRow key={i1} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i2) => {
                  let { onClick } = {
                    ...column.getSortByToggleProps(),
                  };
                  if (column.Header !== "id") {
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
                    if (row.cells[i2].column.Header !== "id") {
                      if (row.cells.length - 1 === i2) {
                        return (
                          <TableCell key={i2} {...cell.getCellProps()}>
                            {
                              <div>
                                <span
                                  onClick={() =>
                                    EditHubCategory(row.original.id)
                                  }
                                >
                                  <EditIcon
                                    color="secondary"
                                    fontSize="small"
                                  />
                                </span>

                                <span
                                  style={{ paddingLeft: "5px" }}
                                  onClick={() =>
                                    DeleteHubCategory(true, row.original.id)
                                  }
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
}

export default HubCategoryList;
