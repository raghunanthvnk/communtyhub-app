import { API_URLS } from "../shared/constants";
import { HTTP_METHODS, httpCall } from "./http-service";

const getFileUploadList = async () => {
    const api = API_URLS.GETFILEUPLOADLIST();
    const fileUploadlist = await httpCall(HTTP_METHODS.GET, api);
    return fileUploadlist?.data;
  };

export default getFileUploadList;
