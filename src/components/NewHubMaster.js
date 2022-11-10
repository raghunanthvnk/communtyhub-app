import React from "react";
import { PRIMARY, COLORS, styles } from "../shared/styles";
import Button from "@mui/material/Button";
import CustomButton from "../shared/UI/CustomButton/CustomButton";
import CustomTextInput from "../shared/UI/CustomTextInput/CustomTextInput";
import CustomCheckbox from "../shared/UI/CustomCheckbox";
import CustomDropDown from "../shared/UI/CustomDropDown/CustomDropDown";
import { isEmpty } from "lodash";
import {
  createHubMaster,
  COUNTRIES,
  CITIES,
  SLOTMASTERS,
  TIMEZONES,
  TIMES,
} from "../services/hubmaster-service";
import { getHubCategoryList } from "../services/hubcategory-service";
import {useNavigate} from 'react-router-dom';

const NewHubMaster = (props) => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    code: "",
    countrycode: "",
    countrycodeError: "",
    citycode: "",
    citycodeError: "",
    othercity: "",
    address: "",
    pincode: "",
    slotmasterid: "",
    slotmasteridError: "",
    timezoneid: "",
    timezoneidError: "",
    isbookingenabled: false,
    bookingstarttimeid: "",
    bookingstarttimeidError: "",
    bookingendtimeid: "",
    bookingendtimeidError: "",
    updatedby: "",
    createdby: "",
    hubcategoryid: "",
    hubcategoryidError: "",
  };

  const [formdata, setformdata] = React.useState(defaultValues);
  const [categoryList, setCategoryList] = React.useState([]);
  React.useEffect(() => {
    getHubCategoryList().then((response) => {
      const hubCategoryList = response;
      const options = hubCategoryList.categoryList?.map(function (row) {
        // This function defines the "mapping behaviour".
        // data from each "row" from your columns array is mapped to a
        // corresponding item in the new "options" array
        return { value: row.id, label: row.name };
      });
      setCategoryList(options);
    });
  }, []);

  const validateFields = () => {
    const errors = {};
    checkErrors(
      formdata,
      errors,
      "countrycode",
      "countrycodeError",
      "Country is empty"
    );
    checkErrors(formdata, errors, "citycode", "citycodeError", "City is empty");
    checkErrors(
      formdata,
      errors,
      "slotmasterid",
      "slotmasteridError",
      "Slot Master Type is empty"
    );
    checkErrors(
      formdata,
      errors,
      "timezoneid",
      "timezoneidError",
      "TimeZone Name is empty"
    );
    checkErrors(
      formdata,
      errors,
      "bookingstarttimeid",
      "bookingstarttimeidError",
      "Booking Start Time is empty"
    );
    checkErrors(
      formdata,
      errors,
      "bookingendtimeid",
      "bookingendtimeidError",
      "Booking End Time is empty"
    );
    checkErrors(
      formdata,
      errors,
      "hubcategoryid",
      "hubcategoryidError",
      "Hub Category Id is empty"
    );
    setErrors(errors);
    return errors;
  };
  const checkErrors = (formValues, errors, fieldName, errField, errMsg) => {
    if (isEmpty(formValues[fieldName])) {
      errors[errField] = errMsg;
    } else {
      errors[errField] = "";
    }
    return errors;
  };
  const setErrors = (errors) => {
    setformdata({
      ...formdata,
      ...errors,
    });
  };
  const handleCreateInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const isAllValuesEmpty = (object) => {
    return !Object.values(object).some(v => v)
  }
  const placeSubmitHandler = async (event) => {
    const errors = validateFields();
    console.log(errors);
    if(isAllValuesEmpty(errors)){
       createHubMaster(formdata).then((response) => {
        navigate('/hubcategory');
       });

    }
    event.preventDefault();
  };
  return (
    <React.Fragment>
    <h2 > Add HUB MASTER </h2>
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <div>
        <CustomTextInput
          name={"name"}
          label={"Name"}
          textStyles={styles.textInputStyle}
          value={formdata.name}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.nameError}
          isRequired={true}
        />

        <CustomTextInput
          name={"code"}
          label={"Code"}
          textStyles={styles.textInputStyle}
          value={formdata.description}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.descriptionError}
          isRequired={true}
        />
      </div>
      <div>
        <CustomDropDown
          name={"countrycode"}
          label={"Country"}
          value={formdata.countrycode}
          options={COUNTRIES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          error={formdata.countrycodeError}
          isRequired={true}
        />
        <CustomDropDown
          name={"citycode"}
          label={"City"}
          value={formdata.citycode}
          options={CITIES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
          error={formdata.citycodeError}
        />
      </div>
      <div>
        <CustomTextInput
          name={"address"}
          label={"Address"}
          textStyles={styles.textInputStyle}
          value={formdata.address}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.addressError}
          isRequired={true}
        />
        <CustomTextInput
          name={"pincode"}
          label={"PinCode"}
          textStyles={styles.textInputStyle}
          value={formdata.pincode}
          onChange={handleCreateInputChange}
          size={"small"}
          error={formdata.pincodeError}
          isRequired={true}
        />
      </div>
      <div>
        <CustomDropDown
          name={"slotmasterid"}
          label={"Slot Master"}
          value={formdata.slotmasterid}
          options={SLOTMASTERS}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
          error={formdata.slotmasteridError}
        />
        <CustomDropDown
          name={"timezoneid"}
          label={"Time Zone"}
          value={formdata.timezoneid}
          options={TIMEZONES}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
          error={formdata.timezoneidError}
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
          error={formdata.bookingstarttimeidError}
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
          error={formdata.bookingendtimeidError}
        />
      </div>
      <div>
        <CustomDropDown
          name={"hubcategoryid"}
          label={"Hub Category List"}
          value={formdata.hubcategoryid}
          options={categoryList}
          onChange={handleCreateInputChange}
          placeholderStyles={styles.dropDownPlaceHolder}
          selectStyles={styles.dropDownSelectStyles}
          menuItemStyles={styles.menuItemStyles}
          size={"small"}
          isRequired={true}
          error={formdata.hubcategoryidError}
        />
        <CustomCheckbox
          label="Is Booking Enabled"
          value={formdata.isbookingenabled}
          onChange={handleCreateInputChange}
        />
        </div>
        <div>
        
      </div>
      <div>
        <Button
          disableRipple
          variant="contained"
          data-testid="submit"
          sx={styles.submitButton}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
    </React.Fragment>
  );
};

export default NewHubMaster;
