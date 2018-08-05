<template>
    <div>
        <TextInputVuex />
        <TodoListVuex />
        <FiltersVuex />
    </div>
</template>

<script>
export default {
  name: "wrap",
};
</script>
<style>
.completed {
  color: red;
  text-decoration: line-through;
}

.type-filters * {
  margin-right: 10px;
}
</style>

