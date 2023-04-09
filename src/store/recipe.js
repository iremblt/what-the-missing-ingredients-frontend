const state = {
    recipe_pagination_list: null,
    popular_recipe_list: null
}
const getters = {
    _getPaginationRecipeList(state) {
        return state.recipe_pagination_list;
    },
    _getPopularRecipeList(state) {
        return state.popular_recipe_list;
    }
}
const mutations = {
    setPaginationRecipeList(state, item) {
        state.recipe_pagination_list = item
    },
    setPopularRecipeList(state, item) {
        state.popular_recipe_list = item
    }
}
const actions = {
    setPaginationRecipeList(context, item) {
        context.commit("setPaginationRecipeList", item);
    },
    setPopularRecipeList(context, item) {
        context.commit("setPopularRecipeList", item);
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}