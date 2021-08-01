<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';
export default Vue.extend({
    data() {
        return {};
    },
    mounted() {
        this.onMyBlogPage(true);
    },

    destroyed() {
        this.onMyBlogPage(false);
    },
    methods: {
        ...mapMutations({
            onMyBlogPage: 'blogStore/onMyBlogPage',
        }),
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
