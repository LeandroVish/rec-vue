<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goAbout() {
  router.push('/about')
}

</script>

<template>
  <button @click="goAbout"> Próximo </button>
<!--  <button @click="$router.push('/')"> Ir para Ajuda </button> -->
</template>

<style scoped></style>