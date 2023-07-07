<script setup>
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import MeuLogin from '@/components/MeuLogin.vue'
import MeuForm from '@/components/MeuForm.vue'
</script>

<template>
  <header>
    <h1>LM</h1>
    <meu-carrinho />
    <meu-login />
    <meu-form />
  </header>
  <main>
    <router-view />
  </main>
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
