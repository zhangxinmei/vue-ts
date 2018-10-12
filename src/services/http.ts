import axios from 'axios';
import { Toast } from 'vant';
import 'vant/lib/vant-css/index.css';
let loading: any; //定义loading变量
let needLoadingRequestCount = 0;

const startLoading = () => {
  loading = Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    message: '加载中...'
  });
};
const endLoading = () => {
  loading.clear();
};
export const showLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
};

export const hideLoading = () => {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
};
axios.create({
  withCredentials: true
});

axios.interceptors.request.use(
  config => {
    // loading
    showLoading();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    hideLoading();
    return response;
  },
  error => {
    hideLoading();
    return Promise.resolve(error.response);
  }
);

export default {
  post(url: string, data: any) {
    return axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url,
      data
    });
  },
  get(url: string, params: any) {
    return axios({
      method: 'get',
      url,
      params // get 请求时带的参数
    });
  }
};
