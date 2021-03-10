import httpClient from '@/api/httpClient';

const TryCatchGet = async (path, data) => {
  try {
    const response = await httpClient.get(path, data);
    return response.data;
  } catch (e) {
    return e;
  }
};

const RequestFactory = async (path, data) => {
    const response = await TryCatchGet(path, data);
    return response;
};
export default RequestFactory;
