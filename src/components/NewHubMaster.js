import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { PRIMARY, COLORS, styles } from "../shared/styles";
import Modal from "../shared/UI/Modal/MaterialModal";
import CustomButton from "../shared/UI/CustomButton/CustomButton";
import CustomTextInput from "../shared/UI/CustomTextInput/CustomTextInput";
import CustomCheckbox from "../shared/UI/CustomCheckbox";
import CustomDropDown from "../shared/UI/CustomDropDown/CustomDropDown";
import {
  createHubMaster,
  COUNTRIES,
  CITIES,
  SLOTMASTERS,
  TIMEZONES,
  TIMES,
} from "../services/hubmaster-service";

const NewHubMaster = (props) => {
  const defaultValues = {
    name: "",
    code: "",
    countrycode: "",
    citycode: "",
    othercity: "",
    address: "",
    pincode: "",
    slotmasterid: "",
    timezoneid: "",
    isbookingenabled: false,
    bookingstarttimeid: 0,
    bookingendtimeid: 0,
    updatedby: "",
    createdby: "",
    hubcategoryid: "",
  };
  const [formdata, setformdata] = React.useState(defaultValues);
  const [createPopup, setCreatePopup] = React.useState(false);
  const cancelCreateHandler = () => {
    setCreatePopup(false);
  };
  const CreateHandler = () => {
    setCreatePopup(false);
    createHubMaster(formdata);
    setformdata(defaultValues);
  };
  const handleCreateInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const placeSubmitHandler = async (event) => {
    alert('submitted')
    event.preventDefault();
  };
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <div>
        <CustomTextInput
          name={"name"}
          label={"Name"}
          value={formdata.name}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.nameError}
          isRequired={true}
        />

        <CustomTextInput
          name={"code"}
          label={"Code"}
          value={formdata.description}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.descriptionError}
          isRequired={true}
        />
      </div>
      <div>
        <CustomDropDown
          name={"Country"}
          label={"Country"}
          value={formdata.countrycode}
          options={COUNTRIES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
        />
        <CustomDropDown
          name={"City"}
          label={"City"}
          value={formdata.citycode}
          options={CITIES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
        />
      </div>
      <div>
        <CustomTextInput
          name={"address"}
          label={"Address"}
          value={formdata.address}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.addressError}
          isRequired={true}
        />
        <CustomTextInput
          name={"pincode"}
          label={"PinCode"}
          value={formdata.pincode}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.pincodeError}
          isRequired={true}
        />
      </div>
      <div>
        <CustomDropDown
          name={"slotmaster"}
          label={"Slot Master"}
          value={formdata.slotmasterid}
          options={SLOTMASTERS}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
        />
        <CustomDropDown
          name={"timezone"}
          label={"Time Zone"}
          value={formdata.timezoneid}
          options={TIMEZONES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
        />
      </div>

      <div>
        <CustomDropDown
          name={"bookingstarttimeid"}
          label={"Booking Start TimeId"}
          value={formdata.bookingstarttimeid}
          options={TIMES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
        />
        <CustomDropDown
          name={"bookingendtimeid"}
          label={"Booking End TimeId"}
          value={formdata.bookingendtimeid}
          options={TIMES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
        />
      </div>
      <div>
        <CustomCheckbox
          label="Is Booking Enabled"
          value={formdata.isbookingenabled}
          onChange={handleCreateInputChange}
        />
      </div>
      <div>
        <CustomButton
          data-testid="catgory-delete"
          label="Submit"
          variant="contained"
          color={PRIMARY[100]}
          style={{
            float: "right",
            marginRight: "16px",
          }}
        />
      </div>
    </form>
  );
};

export default NewHubMaster;
