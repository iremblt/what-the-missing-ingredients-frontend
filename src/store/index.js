import { createStore } from "vuex";
import recipe from "./recipe";
import reviews from "./reviews";
import user from "./user";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
    paths: ["user"],
});

export default createStore({
    plugins: [dataState],
    modules: {
        recipe,
        reviews,
        user,
    },
});
