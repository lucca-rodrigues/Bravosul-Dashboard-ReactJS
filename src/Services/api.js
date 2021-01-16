import axios from 'axios';

// const api = axios.create({
//   baseURL: `${process.env && process.env === 'development' ? process.env.REACT_APP_LINK_API : process.env.REACT_APP_LINK_API_PROD}`,
// });

const api = axios.create({
  baseURL: 'https://bravosul-app.herokuapp.com',
});

export default api;
