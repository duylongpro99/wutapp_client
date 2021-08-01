<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';
import { BlogModel } from '~/model/BlogModel';
import { AppUtilities } from '~/util';
export default Vue.extend({
    data() {
        return {
            blogs: [] as BlogModel[],
        };
    },
    mounted() {
        this.onMyBlogPage(true);
        this.getBlogsByUser();
    },

    destroyed() {
        this.onMyBlogPage(false);
    },
    methods: {
        ...mapMutations({
            onMyBlogPage: 'blogStore/onMyBlogPage',
        }),
        async getBlogsByUser() {
            let blogs: BlogModel[] =
                await this.$repositories.blogRepo.getBlog();
            if (blogs) {
                blogs = JSON.parse(JSON.stringify(blogs));
                this.blogs = blogs;
                this.blogs.forEach((blog: BlogModel) => {
                    blog.color = AppUtilities.genColor();
                });
            }
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
