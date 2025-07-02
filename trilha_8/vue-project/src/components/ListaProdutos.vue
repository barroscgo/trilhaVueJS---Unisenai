<template>
  <div class="produtos-grid">
    <div v-for="produto in produtoStore.produtos" :key="produto.id" class="card">
      <img :src="produto.image" class="produto-img" />
      <h4>{{ produto.title }}</h4>
      <p>R$ {{ produto.price }}</p>
      <button @click="carrinhoStore.adicionarProduto(produto)">Adicionar ao carrinho</button>
    </div>
    <p class="total">Total: R$ {{ carrinhoStore.total }}</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProdutoStore } from '../stores/produtoStore'
import { useCarrinhoStore } from '../stores/carrinhoStore'

const produtoStore = useProdutoStore()
const carrinhoStore = useCarrinhoStore()

onMounted(() => {
  produtoStore.buscarProdutos()
})
</script>

<style scoped>
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 2rem;
}
.card {
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px #ddd;
  text-align: center;
}
.produto-img {
  max-width: 100px;
  height: auto;
  margin-bottom: 1rem;
}
.total {
  grid-column: 1 / -1;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
