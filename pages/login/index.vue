<template src="./index.html"></template>
<script>
export default {
  data() {
    return {
      login: true,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>
}
<style lang="scss">
@import '../../assets/scss/login.scss';
</style>
