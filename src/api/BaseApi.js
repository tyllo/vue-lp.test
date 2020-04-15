import axios from 'axios';
import UrlPattern from 'url-pattern';
import { setGetErrorsInterceptor } from './interceptors/set-get-errors-interceptor';


export class BaseApi {
  http = null;

  url = ':action';

  constructor(url, rawParams = {}) {
    const params = {
      baseURL: process.env.VUE_APP_API_URL,
      ...rawParams,
    };

    if (url) this.url = url;
    this.http = axios.create(params);

    this.setInterceptors();
  }

  get(url, config = {}) {
    const path = url || this.getBasePath();
    return this.http.get(path, config);
  }


  post(url, data, config = {}) {
    const path = url || this.getBasePath();
    return this.http.post(path, data, config);
  }

  put(url, data, config = {}) {
    const path = url || this.getBasePath();
    return this.http.put(path, data, config);
  }

  patch(url, data, config = {}) {
    const path = url || this.getBasePath();
    return this.http.patch(path, data, config);
  }

  delete(url, config = {}) {
    const path = url || this.getBasePath();
    return this.http.delete(path, config);
  }

  setInterceptors() {
    setGetErrorsInterceptor(BaseApi, this.http);
  }

  getBasePath(params = {}) {
    try {
      const pattern = new UrlPattern(this.url);
      const url = pattern.stringify(params);
      return url;
    } catch (e) {
      const name = this.constructor.name || BaseApi;
      const message = `[App warn]: error method in ${name}.getBasePath`;
      // eslint-disable-next-line
      console.warn(message, e);
      return this.url;
    }
  }
}
