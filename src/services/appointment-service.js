import { API_URLS } from "../shared/constants";
import { HTTP_METHODS, httpCall } from "./http-service";

const getAppointmentList = async (fileUploadId) => {
  const api = API_URLS.GETAPPOINTMENTLIST(fileUploadId);
  const hubCategoryData = await httpCall(HTTP_METHODS.GET, api);
  return hubCategoryData?.data;
};

export default getAppointmentList;
