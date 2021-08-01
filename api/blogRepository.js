export default ($axios) => (resource) => ({
    addBlog(blog) {
        return $axios.$post(`${resource}/blog`, blog);
    },

    getBlog() {
        return $axios.$get(`${resource}/blogs`);
    },
});
