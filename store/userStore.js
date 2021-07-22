export const state = () => ({});

export const mutations = {
    async login(user) {
        const res = await this.$axios.$post('/auth/login', user);
        return res;
    },
};
