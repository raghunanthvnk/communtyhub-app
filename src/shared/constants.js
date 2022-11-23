export const API_PREFIX = {
    HUBCATEGORY_API: 'api/HubCategory/',
    HUBMASTER_API:'api/HubMaster',
    UPLOADAFILE_API:'api/Upload/',
    USER_API:'api/user/',
    APPOINTMENT_API:'api/appointments/'
  }

export const API_URLS = {
    GETHUBCATEGORYLIST: () => {
        return API_PREFIX.HUBCATEGORY_API
      },
    DELETEHUBCATEGORY: (CategoryId) => {
        return API_PREFIX.HUBCATEGORY_API+`${CategoryId}`
      },
    EDITHUBCATEGORY: (CategoryId) => {
        return API_PREFIX.HUBCATEGORY_API+`${CategoryId}`
      },
    CREATEHUBCATEGORY: () => {
        return API_PREFIX.HUBCATEGORY_API
      },
    CREATEHUBMASTER:() => {
      return API_PREFIX.HUBMASTER_API
    },
    UPLOADAPPOINTMENTS:() => {
      return API_PREFIX.UPLOADAFILE_API+'xls'
    },
    GETFILEUPLOADLIST:()=>{
      return API_PREFIX.UPLOADAFILE_API
    },
    GETUSERSLIST:()=>{
      return API_PREFIX.USER_API
    },
    EDITUSERDETAILS:(UserId)=>{
      return API_PREFIX.USER_API+`${UserId}`
    },
    DELETEUSER: (UserId) => {
      return API_PREFIX.USER_API+`${UserId}`
    },
    CREATEUSER:() => {
      return API_PREFIX.USER_API
    },
    GETAPPOINTMENTLIST:(fileUploadId) => {
      return API_PREFIX.APPOINTMENT_API+`${fileUploadId}`
    }
}