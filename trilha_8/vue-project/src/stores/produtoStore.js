import { defineStore } from 'pinia'
import axios from 'axios'

export const useProdutoStore = defineStore('produto', {
  state: () => ({
    produtos: []
  }),
  actions: {
    async buscarProdutos() {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        this.produtos = data
      } catch (err) {
        console.error('Erro ao buscar produtos:', err)
      }
    }
  }
})
