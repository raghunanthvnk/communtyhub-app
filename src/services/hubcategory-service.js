import { API_URLS } from "../shared/constants";
import { HTTP_METHODS, httpCall } from "./http-service";

const getHubCategoryList = async () => {
  const api = API_URLS.GETHUBCATEGORYLIST();
  const hubCategoryData = await httpCall(HTTP_METHODS.GET, api);
  return hubCategoryData?.data;
};
const deleteHubCategory = async (hubCategoryId) => {
  const api = API_URLS.DELETEHUBCATEGORY(hubCategoryId);
  const hubCategoryData = await httpCall(HTTP_METHODS.DELETE, api);
  return hubCategoryData?.data;
};
const editHubCategory = async (hubCategoryId,data) => {
  const api = API_URLS.EDITHUBCATEGORY(hubCategoryId);
  const hubCategoryData = await httpCall(HTTP_METHODS.PATCH, api,data);
  return hubCategoryData?.data;
};
const createHubCategory = async (data) => {
  const api = API_URLS.CREATEHUBCATEGORY();
  const hubCategoryData = await httpCall(HTTP_METHODS.POST, api,data);
  return hubCategoryData?.data;
};

export { getHubCategoryList, deleteHubCategory,editHubCategory,createHubCategory };
