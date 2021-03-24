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
    async getPostList({ commit, state }) {
      const posts = await RequestFactory('wp-json/wp/v2/posts/', {
        params: {
          per_page: state.body.limit,
          page: state.body.page,
          _embed: true,
        },
      });
      const post_ids = posts.map((post) => post.featured_media);
      const media = await RequestFactory('wp-json/wp/v2/media/', {
        params: {
          include: post_ids,
          _embed: true,
        },
      });
      commit('SET_POST_LIST', { posts, media });
    },
  },
  mutations: {
    SET_POST_LIST(state, { posts, media }) {
      state.post_list = posts.map((post) => ({ ...post, media: media.find(el => el.id === post.featured_media)}));
      console.warn(state.post_list);
    },
  },
};
