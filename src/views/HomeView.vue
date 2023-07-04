<script setup>
import ListagemItens from '../components/ListagemItens.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

function goAbout() {
  router.push('/about')
}

</script>

<template>
  <button @click="goAbout"> Próximo </button>
  <listagem-itens/>
</template>

<style scoped></style>