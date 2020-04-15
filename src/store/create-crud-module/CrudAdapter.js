
export class CrudAdapter {
  api = null;

  constructor(options) {
    this.api = options.api;
  }

  getAll(params) {
    return this.api.getAll(params, { params });
  }
}
