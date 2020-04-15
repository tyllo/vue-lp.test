import get from 'lodash/get';


export const createGetErrorsInterceptor = () => (error = {}) => {
  const data = get(error, 'response.data') || {};
  const err = data.error || { ...error, message: error.message, ...error.response };
  return Promise.reject(err);
};

export const setGetErrorsInterceptor = (data, axiosInstance) => {
  const getErrorsInterceptor = createGetErrorsInterceptor(data);
  axiosInstance.interceptors.response.use(null, getErrorsInterceptor);
  return axiosInstance;
};
