import axios from 'axios';

const baseURL = 'https://test-api.mapiner.tech/api';

const httpRequest = {
    get: async (url) => {
        try {
            const response = await axios.get(baseURL+url);            
            return response.data;
        } catch (error) {
            console.error('GET request error:', error);
            throw error;
        }
    },

    post: async (url, data = {}) => {
        try {
            const response = await axios.post(baseURL+url, data);
            return response.data;
        } catch (error) {
            console.error('POST request error:', error);
            throw error;
        }
    }
};

export default httpRequest;