<template>
    <div class="app-container">
        <nav-bar
            :is-toggle-sidebar="isToggleSidebar"
            @toggle-sidebar="toggleSidebar($event)"
        >
        </nav-bar>
        <div class="content-wrraper">
            <side-bar :is-toggle-sidebar="isToggleSidebar"></side-bar>
            <Nuxt />
        </div>
    </div>
</template>
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
@import '../assets/scss/size';
.app-container {
    min-height: 100vh;
    .content-wrraper {
        min-height: calc(100vh - #{$navbar-size});
        width: 100%;
        display: flex;
    }
}
</style>
