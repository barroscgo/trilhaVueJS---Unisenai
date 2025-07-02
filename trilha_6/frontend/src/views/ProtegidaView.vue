<template>
  <div>
    <h2>Área Protegida</h2>
    <p>{{ mensagem }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/services/api'

const mensagem = ref('')

onMounted(async () => {
  const token = localStorage.getItem('token')

  try {
    const response = await api.get('/usuarios/protegida', {
      headers: { Authorization: token }
    })
    mensagem.value = response.data.mensagem
  } catch (err) {
    mensagem.value = 'Acesso negado.'
  }
})
</script>
