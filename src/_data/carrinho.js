import { ref } from 'vue'

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

function adicionarAoCarrinho(moveis) {
  const index = carrinho.value.itens.findIndex((item) => item.id === moveis.id)
  if (index === -1) {
    carrinho.value.itens.push({
      ...moveis,
      quantidade: 1,
      total: moveis.price
    })
    carrinho.value.total += moveis.price
  } else {
    carrinho.value.itens[index].quantidade++
    carrinho.value.itens[index].total += moveis.price
    carrinho.value.total += moveis.price
  }
}
export { carrinho, adicionarAoCarrinho, removerItemCarrinho, atualizaQuantidadeItem }