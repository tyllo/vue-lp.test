import { BaseApi } from './BaseApi';


const DEFAULT_REQUEST_ALL_PARAMS = {
  page: 1,
  per_page: 100,
};

const DEFAULT_CONFIG = {
};

export class Api extends BaseApi {
  getAll(params = DEFAULT_REQUEST_ALL_PARAMS, config = {}) {
    const path = this.getBasePath(params);
    return this.get(path, { params, ...config });
  }

  getOne(id, params = {}, config = {}) {
    const path = this.getBasePath({ id, ...params });
    return this.get(path, { ...DEFAULT_CONFIG, ...config });
  }

  create(data, config = {}) {
    const path = this.getBasePath(data);
    return this.post(path, data, { ...DEFAULT_CONFIG, ...config });
  }

  update(id, data, config = {}) {
    const path = this.getBasePath({ id, ...data });
    return this.put(path, data, { ...DEFAULT_CONFIG, ...config });
  }

  remove(id, data = {}, config = {}) {
    const path = this.getBasePath({ id, ...data });
    return this.delete(path, config);
  }
}
