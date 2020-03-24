import api from './api';
import axios from 'axios';

const header = {
  headers: {
    'content-type': 'application/json',
  },
};

class Requests {
  GET = async url => {
    try {
      const response = await api.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  POST = async (obj, url) => {
    try {
      const response = await api.post(url, obj, header);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  PUT = async (obj, url) => {
    try {
      const response = await api.put(url, obj, header);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  DELETE = async url => {
    try {
      console.log(url, 'req');
      const response = await api.delete(url);
      console.log('delete', response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Requests;
