<template src="./FullScreenModal.html"></template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['projectName', 'projectDescription'],
});
</script>
<style lang="scss">
@import './FullScreenModal.scss';
</style>
