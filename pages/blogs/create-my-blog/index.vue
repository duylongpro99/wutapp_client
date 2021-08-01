<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
import { BlogModel } from '~/model/BlogModel';
export default Vue.extend({
    data() {
        return {
            title: '',
            content: '',
        };
    },
    methods: {
        async onCreateBlog() {
            const newBlog: BlogModel = {
                title: this.title,
                content: this.content,
            };

            const res = await this.$repositories.blogRepo.addBlog(newBlog);
            if (res) {
                console.log(res);
                this.onClearBlog();
            }
        },
        onClearBlog() {
            this.title = '';
            this.content = '';
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
