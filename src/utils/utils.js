import axios from "axios";

function handleError(ret) {
  if (ret && ret.data && ret.data.status === 0) {
    return ret;
  }
  
  if (!ret || !ret.data) {
    this.$message.error('网络异常,请稍后再试!');
    return ret;
  }
  
  let status = ret.data.status || -1;
  let mask = parseInt(status / 100000, 10);
  let msg = ret.data.message;
  switch (mask) {
    case 10105:
    case 10106:
    case 10202:
      confirmRedirect(msg);
      break;
    default:
      // message.error(msg || '未知错误');
      break;
  }
  return ret;
}

function wrapDataWithCsrf(data) {
  return {
    ...data,
    [`${window._csrf && window._csrf.parameterName}`]: window._csrf && window._csrf.token
  };
}

export const requestGet = (url, data) => {
  data = wrapDataWithCsrf(data);
  return axios.get(url, {
    params: data
  }).then(ret => handleError(ret))
    .catch(error => {
      console.log(error);
      this.$message.error('网络异常,请稍后再试!');
    });
};

export const getUrlParam = (url, key) => {
  const search = url.split('?') && url.split('?')[1];
  if (search) {
    const params = search.split('&');
    const data = {};
    params.forEach(it => {
      let param = it && it.split('=');
      if (param.length === 2) {
        data[param[0]] = param[1];
      }
    });
    
    return data[key] || '';
  }
  
  return '';
};