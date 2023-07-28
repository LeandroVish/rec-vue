<script setup>
import { carrinho, removerItemCarrinho, atualizaQuantidadeItem, limparcarrinho } from '../_data/carrinho.js'
import CarrinhoSemNada from './CarrinhoSemNada.vue'
import BotaoTop from './BotaoTop.vue';

function formatarPreco(preco) {
  return 'R$' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
  <div class="Carrinho">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling">Carrinho</button>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title" id="offcanvasScrollingLabel">Meu Carrinho</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="wrap-carrinho">
          <carrinho-sem-nada v-if="carrinho.itens.length === 0" />
          <div v-else>
            <div class="itens-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
              <div class="info">
                <div class="img-movel">
                  <img :src="item.img" class="icon-foto-movel">
                </div>
                <div class="detalhes">
                  <div>
                    <p>{{ item.name }}</p>
                    <p class="info-movel-preco">{{ formatarPreco(item.price) }}/un</p>
                  </div>
                  <div>
                    <p>
                      Quantidade:
                      <input type="number" v-model="item.quantidade" @change="atualizaQuantidadeItem(item)" min="1" />
                    </p>
                    <button @click="removerItemCarrinho(item)">&#128465;</button>
                    <p>Total: {{ formatarPreco(item.total) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <botao-top @click="limparcarrinho" text="Limpar Carrinho" />
        <p class="carrinho-total">Total: {{ formatarPreco(carrinho.total) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap-carrinho .carrinho-total {
  position: fixed;
  bottom: 3%;
  font-size: 1.5rem;
  font-weight: bold;
}

.itens-carrinho .info {
  display: flex;
  margin-bottom: 10px;
}

.detalhes {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.detalhes p {
  margin: 0;
}

.detalhes div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-movel-preco {
  margin-left: auto;
}

.icon-foto-movel {
  width: 60px;
  margin-right: 10px;
}
</style>