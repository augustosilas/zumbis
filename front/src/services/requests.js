import api from './api';
import axios from 'axios';

class Requests {
  GET = async type => {
    try {
      const response = await api.get(type);
      console.log(response.status);
    } catch (error) {
      //   console.log(error._response);
    }
  };

  POST = async (obj, type) => {
    try {
      const response = await api.post(type, obj, {
        headers: {
          'content-type': 'application/json',
        },
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
}

export default Requests;
