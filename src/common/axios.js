import axios from "axios";
import { Message } from "element-ui";

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  //超时时间
  timeout: 3 * 1000,
});

//请求拦截器
service.interceptors.request.use(
  (config) => {
    
    /*
    发送请求前的一些处理
        数据转化，配置请求头，设置token，设置loading等
    */
    // config.data = config.data;

    // config.headers = {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // };
    // const token = getCookie("名称");
    const token = "123";
    if (token) {
      //   config.params = { token }; //如果要求携带在参数中
      config.headers.token = token; //如果要求携带在请求头中
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response)
    return response;
  },
  (error) => {
    console.log('---',error)
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        Message.error("服务器响应超时，请刷新当前页");
      }
      error.message("连接服务器失败");
    }
    Message.error(error.message);
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
  }
);

let agentArr = ["/apiWIFI","api4G"];

export const requestGet = (url, params, baseUrl) => {
  let agent = baseUrl ? agentArr[baseUrl] : agentArr[0];
  return new Promise((resolve, reject) => {
    service
      .get(`${agent}/${url}`, { params })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPost = (url, params, baseUrl) => {
  let agent = baseUrl ? agentArr[baseUrl] : agentArr[0];
  return new Promise((resolve, reject) => {
    service
      .post(`${agent}/${url}`, params)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPatch = (url, params, baseUrl) => {
  let agent = baseUrl ? agentArr[baseUrl] : agentArr[0];
  return new Promise((resolve, reject) => {
    service
      .patch(`${agent}/${url}`, { params })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPut = (url, params, baseUrl) => {
  let agent = baseUrl ? agentArr[baseUrl] : agentArr[0];
  return new Promise((resolve, reject) => {
    service
      .put(`${agent}/${url}`, { params })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
