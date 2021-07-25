<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue';
import { RegisterUserModel } from 'model/RegisterUserModel';
import { mapMutations } from 'vuex';

export default Vue.extend({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapMutations({
            setUserToken: 'userStore/setUserToken',
        }),

        async onLogin(e: any) {
            e.preventDefault();
            const user: RegisterUserModel = {
                Email: this.email,
                Password: this.password,
            };
            const { token } = await this.$repositories.userRepo.login(user);
            if (token) {
                this.setUserToken(token);
                this.$router.push('/home');
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
