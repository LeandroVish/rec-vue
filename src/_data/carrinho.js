import { ref } from 'vue'
import { moveis } from './moveis'

const carrinho = ref({
  itens: [],
  total: 0
})

function atualizaQuantidadeItem(item) {
  carrinho.value.total -= item.total
  item.total = item.price * item.quantidade
  carrinho.value.total += item.total
}

function removerItemCarrinho(item) {
  const index = carrinho.value.itens.findIndex((i) => i.id === item.id)
  carrinho.value.total -= item.total
  carrinho.value.itens.splice(index, 1)
}

function adicionarAoCarrinho(movel) {
  const index = carrinho.value.itens.findIndex((item) => item.id === movel.id)
  if (index === -1) {
    carrinho.value.itens.push({
      ...movel,
      quantidade: 1,
      total: movel.price
    })
    carrinho.value.total += movel.price
  } else {
    carrinho.value.itens[index].quantidade++
    carrinho.value.itens[index].total += movel.price
    carrinho.value.total += movel.price
  }
}

export { carrinho, adicionarAoCarrinho, removerItemCarrinho, atualizaQuantidadeItem }