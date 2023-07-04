<script setup>
import { moveis } from '@/_data/moveis.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'
import CaixaMoveis from '@/components/CaixaMoveis.vue'
</script>

<template>
<div class="lista-item">
    <caixa-moveis 
    v-for="moveis in movel"
    v-bind:key="moveis.id"
    v-bind:movel="moveis"
    @adicionaeAoCarrinho="adicionarAoCarrinho"
    />
</div>
</template>

<style scoped>
.lista-item {
    display: flex;
    flex-wrap: wrap;
}
</style>