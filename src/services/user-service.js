import { API_URLS } from "../shared/constants";
import { HTTP_METHODS, httpCall } from "./http-service";

const getUsersList = async () => {
    const api = API_URLS.GETUSERSLIST();
    const userData = await httpCall(HTTP_METHODS.GET, api);
    return userData?.data;
  };
  const deleteUser = async (UserId) => {
    const api = API_URLS.DELETEUSER(UserId);
    const userData = await httpCall(HTTP_METHODS.DELETE, api);
    return userData?.data;
  };
  const editUser= async (UserId,data) => {
    const api = API_URLS.EDITUSERDETAILS(UserId);
    const userData = await httpCall(HTTP_METHODS.PATCH, api,data);
    return userData?.data;
  };
  const createUser = async (data) => {
    const api = API_URLS.CREATEUSER();
    const userData = await httpCall(HTTP_METHODS.POST, api,data);
    return userData?.data;
  };
export { getUsersList,deleteUser,editUser,createUser};
