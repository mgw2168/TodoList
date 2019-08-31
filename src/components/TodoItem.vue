<template>
    <li @click="deleteClick">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    deleteClick () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
