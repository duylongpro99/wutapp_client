/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
export const state = () => ({
    blogs: ['blog']
})

export const mutations = {

    async getAll(){
        console.log('call getAll')
        const res = await this.$axios.$get('/blogs');
        console.log(res);
        return res.json();
    }
}