import RequestFactory from '../../api/request';

export default {
  namespaced: true,
  state: {
    post_list: [],
    body: {
      limit: 10,
      page: 1,
    },
  },
  getters: {
    post_list: state => state.post_list,
    media_list: state => state.media_list,
  },
  actions: {
    async createUser() {
      const res = await RequestFactory('wp-json/wp/v2/users/', {
        params: {
          username: 'test user',
          email: 'pawlo313@gmail.com',
          password: 'Admin123!'
        },
      }, 'post');
      console.warn(res);
    },
  },
  mutations: {

  },
};
