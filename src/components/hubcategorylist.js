import * as React from "react";
// import Modal from '@mui/material/Modal'
import { useQueryClient  } from "react-query";
import {
  getHubCategoryList,
  deleteHubCategory,editHubCategory
} from "../services/hubcategory-service";
import { useQuery } from "react-query";
import _ from "lodash";
import { PRIMARY, COLORS } from "../shared/styles";
import Modal from "../shared/UI/Modal/MaterialModal";
// import Modal from "react-modal";
import CustomButton from "../shared/UI/CustomButton/CustomButton";
import CustomTextInput from "../shared/UI/CustomTextInput/CustomTextInput";
import CustomCheckbox from "../shared/UI/CustomCheckbox";
import TableComponent from "../shared/componenets/Table/tableComponent";
export const SUPERVISOR_API_KEY = "SUPERVISOR_API_KEY";

const HubCategoryList = (props) => {
  const queryClient = useQueryClient()
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
  const DeleteRecordHandler = (id) => {
    setDeletePopup(true);
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

  const EditRecordHandler = (id) => {
    let hubcategorydata=  data.categoryList.find(x => x.id === id)
    
    setFormValues({name:hubcategorydata.name,description:hubcategorydata.description,
      isactive:hubcategorydata.isactive,
      isdefaultbookingtime:hubcategorydata.isdefaultbookingtime,
      updatedby:"Admin"
    });
    setEditPopup(true);
    setHubCategoryId(id);
    refetch();
    queryClient.invalidateQueries(SUPERVISOR_API_KEY)
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
      
      <TableComponent
          data-testid="myTeamTable"
          columns={createColumns(data)}
          data={flattenData(data)}
          DeleteIconreq="true"
          DownloadIconreq="false"
          EditIconreq="true"
          DeleteRecordHandler={DeleteRecordHandler}
          EditRecordHandler={EditRecordHandler}
        />
    </React.Fragment>
  );
};


export default HubCategoryList;
