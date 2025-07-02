<template>
  <div>
    <h2>Usuários Cadastrados</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nome }} - {{ usuario.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/service/api'

const usuarios = ref([])

onMounted(async () => {
  try {
    const response = await api.get('/usuarios')
    usuarios.value = response.data
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
  }
})
</script>
