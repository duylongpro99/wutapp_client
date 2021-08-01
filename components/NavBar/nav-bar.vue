<template src="./nav-bar.html"></template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        isToggleSidebar: {
            type: Boolean,
        },
    },
    data() {
        return {};
    },
    methods: {
        toggleSideBar() {
            this.$emit('toggle-sidebar');
        },
    },
});
</script>
<style lang="scss">
@import './nav-bar.scss';
</style>
