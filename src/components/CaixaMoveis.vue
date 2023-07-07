<script setup>
import BotaoTop from './BotaoTop.vue';
const props = defineProps({
  movel: Object
})

const emit = defineEmits(['adicionarAoCarrinho'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
  <div class="card">
    <div class="card-info">
      <div class="wrap">
        <img :src="props.movel.img" alt="Imagem Movel" class="foto" />
      </div>
      <p class="nome-movel">{{ props.movel.name }}</p>
      <p class="preco-movel">{{ formatarPreco(props.movel.price) }}</p>
    </div>
    <div class="card-buttons">
      <botao-top
        @click="emit('adicionarAoCarrinho', props.movel)"
        text="Adicionar ao carrinho"
      ></botao-top>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 15px 30px;
  padding: 10px;
  background-color: rgb(223, 107, 107);
  border-radius: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 180px;
  height: 270px;
}

.foto {
  width: 95%;
  max-height: 100%;
}

.card p {
  margin: 0;
}

.card .nome-movel {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>