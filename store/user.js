const state = () => ({
    token: "",
});
const mutations = {
    init(state, token) {
        state.token = token;
    },
};
const getters = {
    isLogin(state) {
        return !!state.token;
    },
};
const actions = {
    login({ commit, getters }, u) {
        return this.$axios.$post("/api/login", u).then(({ token }) => {
            if (token) {
                commit("init", token);
            }
            return getters.isLogin;
        });
    },
};
export { actions, getters, mutations, state };