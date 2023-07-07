<script setup>
const props = defineProps({
    text:String
})
</script>

<template>
<button>{{ props.text }}</button>
</template>

<style scoped>
button {
  background-color: red;
  color: white;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
  font-size: 1.0rem;
  cursor: pointer;
  margin: 1px;
}

button:hover {
  background-color: darkred;
}
</style>