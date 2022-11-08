import { API_URLS } from "../shared/constants";
import { HTTP_METHODS, httpCall } from "./http-service";

const createHubMaster = async (data) => {
  const api = API_URLS.CREATEHUBMASTER();
  const hubCategoryData = await httpCall(HTTP_METHODS.POST, api, data);
  return hubCategoryData?.data;
};
const COUNTRIES = [
  { value: "India", label: "India" },
  { value: "China", label: "China" },
  { value: "Philippines", label: "Philippines" }
];

const CITIES = [
  { value: "Banglore", label: "Banglore", parent: "India" },
  { value: "Chennai", label: "Chennai", parent: "India" },
  { value: "Hyderabad", label: "Hyderabad", parent: "India" },
  { value: "Makati", label: "Makati", parent: "Philippines" },
  { value: "Cebu City", label: "Cebu City", parent: "Philippines" },
  { value: "Manila", label: "Manila", parent: "Philippines" }
];
const SLOTMASTERS = [
  { value: "1", label: "60 Mins Duration" },
  { value: "2", label: "30 Mins Duration" }
];
const TIMEZONES = [
  { value: "1", label: "Asia/Kolkata" },
  { value: "2", label: "Pacific/Midway" },
  { value: "3", label: "Europe/Minsk" }
];
const TIMES = [
  { value: "0", label: "10AM" },
  { value: "12", label: "12PM" },
  { value: "24", label: "12AM" }
];
export { createHubMaster, COUNTRIES, CITIES ,SLOTMASTERS,TIMEZONES,TIMES};
