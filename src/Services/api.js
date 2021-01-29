import axios from 'axios';

// const api = axios.create({
//   baseURL: `${process.env && process.env === 'development' ? process.env.REACT_APP_LINK_API : process.env.REACT_APP_LINK_API_PROD}`,
// });

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://development.nodejs202.uni5.net:21007',
});

export default api;
