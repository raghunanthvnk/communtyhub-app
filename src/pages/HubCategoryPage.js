import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { PRIMARY } from "../shared/styles";
import HubCategoryList from "../components/hubcategorylist";
import Modal from "../shared/UI/Modal/MaterialModal";
import Card from "../shared/UI/Card/Card";
import {
  createHubCategory
} from "../services/hubcategory-service";
import CustomButton from "../shared/UI/CustomButton/CustomButton";
import CustomTextInput from "../shared/UI/CustomTextInput/CustomTextInput";
import CustomCheckbox from "../shared/UI/CustomCheckbox";

const HubCategoryPage = (props) => {
  const defaultValues = {
    name: "",
    description: "",
    isactive: false,
    isdefaultbookingtime: true
  };
  const [formdata, setformdata] = React.useState(defaultValues);
  const [createPopup, setCreatePopup] = React.useState(false);
  const cancelCreateHandler = () => {
    setCreatePopup(false);
  };
  const CreateHandler = () => {
    setCreatePopup(false);
    createHubCategory(formdata)
    setformdata(defaultValues)
  };
  const handleCreateInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <React.Fragment>
      <Modal
        header="Create Hub Category"
        isOpen={createPopup}
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <CustomButton
              data-testid="catgory-cancel"
              label="Cancel"
              variant="contained"
              color={PRIMARY[100]}
              style={{
                marginRight: "16px",
              }}
              onClick={() => cancelCreateHandler()}
            />
            <span></span>
            <CustomButton
              data-testid="catgory-delete"
              label="Save"
              variant="contained"
              color={PRIMARY[100]}
              style={{
                marginRight: "16px",
              }}
              onClick={() => CreateHandler()}
            />
          </React.Fragment>
        }
      >
        <CustomTextInput
          name={"name"}
          label={"Name"}
          value={formdata.name}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.nameError}
          isRequired={true}
        />
        <div>
          <CustomTextInput
            name={"description"}
            label={"Description"}
            value={formdata.description}
            onChange={handleCreateInputChange}
            size={"small"}
            error={formdata.descriptionError}
            isRequired={true}
          />
        </div>
        <div>
          <CustomCheckbox
            label="IsActive"
            value={formdata.isactive}
            onChange={handleCreateInputChange}
          />
        </div>
        <div>
          <CustomCheckbox
            label="isDefaultBookingTime"
            value={formdata.isdefaultbookingtime}
            onChange={handleCreateInputChange}
          />
        </div>
      </Modal>
      <Card>
      <CustomButton
        data-testid="add-category"
        label="Add Category"
        variant="contained"
        color={PRIMARY[100]}
        style={{
          float: "left",
        }}
        startIcon={<ControlPointIcon style={{ height: 14, width: 14 }} />}
        onClick={() => setCreatePopup(true)}
      />
      <div style={{ marginTop: "50px" }}></div>
      <div>
        <HubCategoryList  />
      </div>
      </Card>
    </React.Fragment>
  );
};

export default HubCategoryPage;
