<template src="./FullScreenModal.html"></template>
<script lang="ts">
import Vue from 'vue';
import { ProjectModel } from 'model/ProjectModel';
export default Vue.extend({
    props: [
        'projectName',
        'projectDescription',
        'projectStartDate',
        'projectEndDate',
    ],
    methods: {
        async onCreateProject() {
            const addProjectReq: ProjectModel = {
                name: this.projectName,
                description: this.projectDescription,
                startDate: this.projectStartDate,
                endDate: this.projectEndDate,
            };
            const res = await this.$repositories.projectRepo.createMyProject(
                addProjectReq
            );
            if (res) {
                console.log(res);
                this.$router.push('/projects/my-project');
            }
        },
    },
});
</script>
<style lang="scss">
@import './FullScreenModal.scss';
</style>
