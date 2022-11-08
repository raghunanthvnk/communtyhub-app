export const API_PREFIX = {
    HUBCATEGORY_API: 'api/HubCategory/',
    HUBMASTER_API:'api/HubMaster'
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
}