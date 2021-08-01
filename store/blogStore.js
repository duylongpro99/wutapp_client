/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
export const state = () => ({
    isMyBlogPage: false,
})

export const mutations = {
    onMyBlogPage(state, isOnMyBlog){
        state.isMyBlogPage = isOnMyBlog;
    }
}