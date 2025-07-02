<template>
  <div>
    <h2>Consulta Clima</h2>
    
    <input v-model="cidade" placeholder="Digite a cidade" />
    
    <select v-model="unidade">
      <option value="metric">Celsius</option>
      <option value="imperial">Fahrenheit</option>
    </select>

    <button @click="buscarClima">Buscar</button>

    <p v-if="loading">Carregando clima...</p>
    <p v-if="error" style="color:red">{{ error }}</p>
    <pre v-if="clima">{{ clima }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const cidade = ref('')
const unidade = ref('metric') // Celsius por padrão
const clima = ref(null)
const error = ref('')
const loading = ref(false)

// Substitua pela sua chave da OpenWeatherMap
const apiKey = 'e59ce60f273ce29dfd56f6abe2fbe84f'

function buscarClima() {
  if (!cidade.value) {
    error.value = 'Informe uma cidade.'
    return
  }

  error.value = ''
  loading.value = true

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade.value}&appid=${apiKey}&units=${unidade.value}`)
    .then(response => clima.value = response.data)
    .catch(() => error.value = 'Erro ao buscar o clima. Verifique a cidade ou tente novamente.')
    .finally(() => loading.value = false)
}
</script>
