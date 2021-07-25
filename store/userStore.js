/* eslint-disable @typescript-eslint/no-unused-vars */
export const state = () => ({
    token: '',
});

export const mutations = {
    setUserToken(state, token) {
        state.token = token;
        // if (process.browser) {
        //     localStorage.setItem('authToken', token);
        // }
    },
};
