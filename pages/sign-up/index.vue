<template src="./index.html"></template>
<script lang="ts">
import { mapMutations } from 'vuex';
import { RegisterUserModel } from 'model/RegisterUserModel';
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errEmail: '',
        };
    },
    methods: {
        ...mapMutations({
            signUp: 'userStore/signUp',
        }),
        onSignUp(e: any) {
            e.preventDefault();
            const user: RegisterUserModel = {
                Name: this.name,
                Email: this.email,
                Password: this.password,
            };
            this.$store.commit('userStore/signUp', user);
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
