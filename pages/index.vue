<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            isToggleSidebar: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isToggleSidebar = !this.isToggleSidebar;
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
