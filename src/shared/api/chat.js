import { axiosClient } from './api.config';

const chatApi = {
    getAssistantResponse: async (payload) => {
        try {
          const response = await axiosClient.post('/api', payload, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
          return response.data;
        } catch (error) {
          console.error('Error occurred while making the API request:', error);
          throw error;
        }
      }
};

export default chatApi;
