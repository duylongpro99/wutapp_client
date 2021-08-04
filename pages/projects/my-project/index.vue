<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
import FullScreenModal from '~/components/Modal/FullScreenModal/index.vue';
export default Vue.extend({
    components: {
        FullScreenModal,
    },
    data() {
        return {
            isComponentModalActive: false,
            formProps: {
                projectName: '',
                projectDescription: '',
                projectStartDate: new Date(),
                projectEndDate: new Date(),
            },
        };
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
