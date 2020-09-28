<template>
  <div>
    <b-button @click="add">{{ counter }}</b-button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++
    }
  }
}
</script>

<style scoped>

</style>
