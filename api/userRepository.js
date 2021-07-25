export default ($axios) => (resource) => ({
    login(user) {
        return $axios.$post(`${resource}/login`, user);
    },

    signUp(user) {
        return $axios.$post(`${resource}/register`, user);
    },
});
