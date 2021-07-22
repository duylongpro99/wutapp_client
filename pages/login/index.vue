<template src="./index.html"></template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            login: true,
        };
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        ...mapMutations({
            loginUser: 'userStore/login',
        }),
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    const loginReq = {
                        Email: values.email,
                        Password: values.password,
                    };
                    const req = this.loginUser(loginReq);
                    console.log(req);
                }
            });
        },
    },
};
</script>
<style lang="scss">
@import './index.scss';
</style>
