<template>
    <div>
      <input class="todo" type="text" ref="text" />
      <input type="button" value="addTodo" @click="handleClick" />
    </div>
</template>

<script>
export default {
    name: "textInput",
    methods: {
    handleClick() {
      this.$store.commit("todoList/addTodo", {
        text: this.$refs.text.value
      })
      this.$refs.text.value = ""
    }
  }
}
</script>

