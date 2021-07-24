<template src="./index.html"></template>
<script lang="ts">
import { mapMutations } from 'vuex';
import { RegisterUserModel } from 'model/RegisterUserModel';
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapMutations({
            loginUser: 'userStore/login',
        }),
        async onLogin(e: any) {
            e.preventDefault();
            const user: RegisterUserModel = {
                Email: this.email,
                Password: this.password,
            };
            // this.loginUser(user);
            const { token } = await this.$repositories.userRepo.login(user);
            if (token) {
                this.$router.push('/');
            }
        },
        clearIconClick() {
            this.email = '';
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
