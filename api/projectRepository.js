export default ($axios) => (resource) => ({
    createMyProject(project) {
        return $axios.$post(`${resource}/project`, project);
    },
});
