/* eslint-disable @typescript-eslint/no-unused-vars */
export const state = () => ({
    token: '',
});

export const mutations = {
    async login(state, user) {
        const { token } = await this.$axios.$post('/auth/login', user);
        state.token = token;
        return token;
    },

    async signUp(state, user) {
        const res = await this.$axios.$post('auth/register', user);
        return res;
    },
};
