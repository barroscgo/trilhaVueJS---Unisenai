<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="fazerLogin">
      <input v-model="email" placeholder="Email" required />
      <input v-model="senha" type="password" placeholder="Senha" required />
      <button>Entrar</button>
    </form>
    <p v-if="erro">{{ erro }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/service/api'

const email = ref('')
const senha = ref('')
const erro = ref('')
const router = useRouter()

const fazerLogin = async () => {
  try {
    const response = await api.post('/usuarios/login', {
      email: email.value,
      senha: senha.value
    })

    const token = response.data.token
    localStorage.setItem('token', token)
    router.push('/protegida')
  } catch (err) {
    erro.value = 'Email ou senha inválidos.'
  }
}
</script>
