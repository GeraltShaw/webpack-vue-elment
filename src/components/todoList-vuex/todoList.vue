<template>
  <ul>
    <li 
    v-for="(item, index) in filterList" 
    v-bind:class="{'completed' : item.completed}" 
    v-bind:_id="index" @click="handleClick(item.id)"
    v-bind:key="index"  >
        {{item.text}}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "todoList",
  computed: mapGetters("todoList", ["filterList"]),
  methods: {
    handleClick(id){
      this.$store.commit("todoList/completedTodo", {
        id
      })
    }
  }
}
</script>

