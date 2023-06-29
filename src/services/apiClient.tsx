import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bfb1c7606aec4c34ac86f910075fa04e',
  },
});
