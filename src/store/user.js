const state = {
    user: null
};
const getters = {
    _isAuthenticated(state) {
        return state.user != null ? true : false;
    },
    _getCurrentUser(state) {
        return state.user;
    }
};
const mutations = {
    setUser(state, item) {
        state.user = item;
    },
    setLogOutUser(state) {
        state.user = null;
    }
};
const actions = {
    setUser(context, item) {
        context.commit("setUser", item);
    },
    setLogOutUser(context, item) {
        context.commit("setLogOutUser", item);
    },
};
export default {
    state,
    mutations,
    actions,
    getters,
};
