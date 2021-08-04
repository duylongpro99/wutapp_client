<template src="./side-bar.html"></template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        isToggleSidebar: {
            type: Boolean,
        },
    },
    data() {
        return {
            isOpen: this.isToggleSidebar,
            isActive: true,
        };
    },
    watch: {
        isToggleSidebar(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.isOpen = newVal;
            }
        },
    },
});
</script>
<style lang="scss">
@import './side-bar.scss';
</style>
