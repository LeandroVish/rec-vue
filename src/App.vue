<script setup>
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import FormCompras from '@/components/FormCompras.vue'
</script>

<template>
  <header>
  <h1>LM</h1>
  <meu-carrinho />
  <form-compras />
</header>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
}
</style>
