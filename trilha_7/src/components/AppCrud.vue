<template>
  <div>
    <h2>CRUD com Axios</h2>

    <input v-model="novoItem" placeholder="Novo item" />
    <button @click="adicionar">Adicionar</button>

    <ul>
      <li v-for="item in itens" :key="item.id">
        {{ item.title }}
        <button @click="remover(item.id)">Excluir</button>
      </li>
    </ul>

    <p v-if="loading">Carregando lista...</p>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const novoItem = ref('')
const itens = ref([])
const loading = ref(false)
const error = ref('')

function listar() {
  loading.value = true
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => itens.value = res.data)
    .catch(() => error.value = 'Erro ao carregar itens')
    .finally(() => loading.value = false)
}

function adicionar() {
  if (!novoItem.value) return

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: novoItem.value,
    completed: false
  }).then(res => {
    itens.value.push(res.data)
    novoItem.value = ''
  }).catch(() => {
    error.value = 'Erro ao adicionar item'
  })
}

function remover(id) {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => {
      itens.value = itens.value.filter(item => item.id !== id)
    }).catch(() => {
      error.value = 'Erro ao excluir item'
    })
}

onMounted(listar)
</script>
