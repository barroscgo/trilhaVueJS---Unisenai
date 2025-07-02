import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    carrinho: []
  }),
  actions: {
    adicionarProduto(produto) {
      this.carrinho.push(produto)
    },
    removerProduto(id) {
      this.carrinho = this.carrinho.filter(p => p.id !== id)
    }
  },
  getters: {
    total: (state) => state.carrinho.reduce((acc, p) => acc + p.price, 0)
  }
})
