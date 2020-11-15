const state = {
  activeTag: "",
  isCollapse: false,
};

const mutations = {
  SET_ACTIVE_TAG: (state, data) => {
    state.activeTag = data;
  },
  SET_COLLAPSE: (state, flag) => {
    state.isCollapse = flag;
  },
};

const actions = {
  activeAction({ commit }, params) {
    commit("SET_ACTIVE_TAG", params);
  },
  isCollapseAction({commit},params){
    commit("SET_COLLAPSE", params);
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
