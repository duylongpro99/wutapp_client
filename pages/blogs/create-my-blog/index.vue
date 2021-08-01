<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            title: '',
            content: '',
        };
    },
    methods: {
        onCreateBlog() {
            console.log(this.title, this.content);
        },
        onCancleBlog() {
            this.title = '';
            this.content = '';
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
