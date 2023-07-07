<script setup>
import ListagemItens from './components/ListagemItens.vue'
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import MeuLogin  from '@/components/MeuLogin.vue'
import MeuForm from '@/components/MeuForm.vue'
import { carrinho } from './_data/carrinho'
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
  <listagem-itens/> 
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
