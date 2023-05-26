const state = {
    isNewCommentAdded: false
};
const getters = {
    _getIsNewCommentAdded(state) {
        return state.isNewCommentAdded;
    }
};
const mutations = {
    setNewCommentAdded(state, item) {
        state.isNewCommentAdded = item;
    }
};
const actions = {
    setNewCommentAdded(context, item) {
        context.commit("setNewCommentAdded", item);
    }
};
export default {
    state,
    mutations,
    actions,
    getters,
};
