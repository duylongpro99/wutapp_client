export default ($axios) => (resource) => ({
    index() {
        return $axios.get(`${resource}`);
    },

    show(id) {
        return $axios.$get(`${resource}/${id}`);
    },

    create(payload) {
        return $axios.$post(`${resource}`, payload);
    },

    update(id, payload) {
        return $axios.$post(`${resource}/${id}`, payload);
    },

    delete(id) {
        return $axios.$delete(`${resource}/${id}`);
    },

    login(user) {
        return $axios.$post(`${resource}/login`, user);
    },
});
