<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="senha" type="password" placeholder="Senha" />
    <button @click="login">Entrar</button>
    <p v-if="token">Token JWT: {{ token }}</p>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const senha = ref('')
const token = ref('')
const error = ref('')

function login() {
  error.value = ''
  token.value = ''

  axios.post('https://reqres.in/api/login', {
    email: email.value,
    password: senha.value
  })
    .then(res => {
      token.value = res.data.token
      localStorage.setItem('token', res.data.token)
      alert('Login realizado com sucesso!')
    })
    .catch(() => {
      error.value = 'Credenciais inválidas. Use email e senha válidos.'
    })
}
</script>
