import httpClient from '@/api/httpClient';

const TryCatchRequest = async (path, data, method = 'get') => {
  try {
    const response = await httpClient[method](path, data);
    return response.data;
  } catch (e) {
    return e;
  }
};

const RequestFactory = async (path, data, method) => {
    const response = await TryCatchRequest(path, data, method);
    return response;
};

export default RequestFactory;
