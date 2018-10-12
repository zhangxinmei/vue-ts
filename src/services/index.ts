import axios from './http';
import * as config from './api.config';

const test = async (data: any) => {
  return axios.post(`${config.demoTest()}/login`, data);
};
export default {
  test
};
