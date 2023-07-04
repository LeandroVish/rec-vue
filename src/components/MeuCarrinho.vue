<script setup>
import CarrinhoSemNada from './CarrinhoSemNada.vue'
import { carrinho, removerItemCarrinho, atualizaQuantidadeItem } from '../_data/carrinho.js'

function formatarPreco(preco) {
    return 'R$' + preco.toFixed(2).replace('.',',')
}
</script>

<template>
    <div class="Carrinho">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">Carrinho</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h3 id="offcanvasRightLabel">Meu Carrinho</h3>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <carrinho-sem-nada v-if="carrinho.itens.length === 0" />
                <div v-else>
                    <div class="itens-carrinho" v-for="(itens, index) in carrinho.itens" :key="index">
                        <div class="info">
                            <div class="img-movel">
                                <img src="item.img" class="icon-foto-movel">
                            </div>
                            <div class="detalhe">
                                <div>
                                    <p>{{ item.name }}</p>
                                    <p class="info-movel-preco">{{ formatarPreco(item.price) }}/un</p>
                                </div>
                                <div>
                                    <p>
                                        Quantidade:
                                        <input
                                        type="number"
                                        v-model="item.quantidade"
                                        @change="atualizaQuantidadeItem(item)"
                                        min="1"
                                        />
                                    </p>
                                    <button @click="removerItemCarrinho(item)">&#128465;</button>
                                    <p>Total: {{ formatarPreco(item.total) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button>a</button>
            </div>
        </div>
    </div>
</template>