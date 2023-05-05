import { createStore } from "vuex";
import recipe from "./recipe";
import reviews from "./reviews";
import user from "./user";

export default createStore({
    modules: {
        user,
        recipe,
        reviews
    },
});
