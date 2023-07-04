<script setup>
const props = defineProps({
    moveis: Object
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
                <img :src="props.moveis.img" alt="Imagem Movel" class="foto" />
            </div>
            <p class="nome-movel">{{ props.moveis.name }}</p>
            <p class="preco-movel">{{ formatarPreco(props.moveis.price) }}</p>
        </div>
        <div class="card-buttons">
            <button @click="emit('adicionarAoCarrinho', props.moveis)" text="Adicionar ao carrinho"></button>
        </div>
    </div>
</template>

<style scoped>
.card {
  margin: 5px 10px;
  padding: 10px;
  background-color: rgb(223, 107, 107);
  border-radius: 10px;
  width: 180px;
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
  width: 90%;
  max-height: 100%;
}

p {
  margin: 0;
}

.card .nome-movel {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>