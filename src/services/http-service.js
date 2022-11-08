import axios from 'axios';

export const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch'
}


const instance = axios.create({
  baseURL: process.env.REACT_APP_COMMUNITYHUBAPI_URL
    || '',
  headers: {
    "Content-Type": "application/json"
  //  ,"x-access-token":process.env.REACT_APP_AUTHORIZATION
  }
})

instance.interceptors.request.use((config) => {
  const token = process.env.REACT_APP_AUTHORIZATION
  if (token) {
    // config.headers["Authorization"] = token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  showErrorToaster(error)
  return Promise.reject(error)
})

export async function httpCall (type, url, data, mockAPI = false) {
  try {
    let options = !mockAPI ? {} : {
      baseURL:
        'https://api.ameeba.io/api/pragma_mock/pragma'
    }

    return await getApiResultByHttpMethod(type, url, data, options)
  } catch (error) {
    return { ...error?.response, message: error?.response?.data, data: null }
  }
}


async function getApiResultByHttpMethod (type, url, data, options) {
  switch (type) {
  case HTTP_METHODS.POST:
    return instance.post(url, data, options)
  case HTTP_METHODS.GET:
    return instance.get(url, options)
  case HTTP_METHODS.PUT:
    return instance.put(url, data, options)
  case HTTP_METHODS.DELETE:
    return instance.delete(url, options)
  case HTTP_METHODS.PATCH:
    return instance.patch(url, data, options)
  }
}

function showErrorToaster (error) {
  let message = ''
  if ((error?.response?.status >= 400 && error?.response?.status < 499) ||
    (error?.response?.status >= 500 && error?.response?.status < 599)) {
    message = `The server could not be contacted.
      This may be a temporary glitch or the server may be down`
  }
  if (message) {
    // store.dispatch(errorToasterActions.setErrorToaster({
    //   show: true,
    //   message: message
    // }))
  }
}