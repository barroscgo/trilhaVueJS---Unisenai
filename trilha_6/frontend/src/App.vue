<template>
  <div id="app">
    <h1>Plataforma de Usuários</h1>
    <Login />
    <ListaUsuarios />
  </div>
</template>

<script setup>
import Login from './components/userLogin.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #333;
}

#app {
  max-width: 800px;
  margin: auto;
}
</style>
