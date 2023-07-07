<script setup>
import ListagemItensNew from '../components/ListagemItensNew.vue';
</script>

<template>
  <div class="about">
    <button @click="$router.push('/')"> Voltar </button>
    <listagem-itens-new/>
  </div>
</template>

<style scoped>
</style>
