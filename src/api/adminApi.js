import axios from 'axios';
let base = util.getDomain();

//登录退出
export const requestLogin = params => {
    return axios.get(`${base}/api/Admin/Login`, {
      params: params
    });
  };