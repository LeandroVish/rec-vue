<script setup>
import { moveis2 } from '@/_data/moveis.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'
import CaixaMoveis from '@/components/CaixaMoveis.vue'
</script>

<template>
  <div class="lista-item">
    <caixa-moveis
      v-for="movel2 in moveis2"
      v-bind:key="movel2.id"
      v-bind:movel="movel2"
      @adicionarAoCarrinho="adicionarAoCarrinho"
    />
  </div>
</template>

<style scoped>
.lista-item {
    display: flex;
    flex-wrap: wrap;
}
</style>
