<template>
  <div>
    <button @click="getAll()">Get blogs API</button>
    <button @click="getBlogs">Get blogs</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      // eslint-disable-next-line prettier/prettier
      getAll: 'blogStore/getAll',
      blogState: 'blogStore/getBlogsState',
    }),
    getBlogs() {
      console.log(this.$store.state.blogStore.blogs)
    },
  },
}
</script>

<style>
@import './Logo.scss';
</style>
