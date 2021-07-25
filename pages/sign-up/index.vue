<template src="./index.html"></template>
<script lang="ts">
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
        async onSignUp(e: any) {
            e.preventDefault();
            const user: RegisterUserModel = {
                Name: this.name,
                Email: this.email,
                Password: this.password,
            };

            const res = await this.$repositories.userRepo.signUp(user);
            if (res) {
                this.$router.push('/login');
            }
        },
    },
});
</script>
<style lang="scss">
@import './index.scss';
</style>
