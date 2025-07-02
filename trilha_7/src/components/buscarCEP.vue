<template>
  <div>
    <h2>Buscar CEP</h2>
    <input v-model="cep" placeholder="Digite o CEP" />
    <button @click="buscarEndereco">Buscar</button>

    <p v-if="loading">Carregando...</p>
    <p v-if="error" style="color:red">{{ error }}</p>
    <pre v-if="endereco">{{ endereco }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../services/api'

const cep = ref('')
const endereco = ref(null)
const error = ref('')
const loading = ref(false)

function buscarEndereco() {
  if (cep.value.length !== 8) {
    error.value = 'CEP inválido! Digite exatamente 8 números.'
    endereco.value = null
    return
  }

  error.value = ''
  loading.value = true

  api.get(`${cep.value}/json`)
    .then(response => {
      if (response.data.erro) {
        error.value = 'CEP não encontrado!'
        endereco.value = null
      } else {
        endereco.value = response.data
      }
    })
    .catch(() => {
      error.value = 'Erro ao buscar o CEP. Tente novamente.'
      endereco.value = null
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
