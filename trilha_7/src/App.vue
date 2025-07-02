<template>
  <div id="app">
    <h1>Trilha 07 - Vue.js + Axios</h1>
    
    <buscarCEP />
    <WeatherClima />
    <UserLogin />
    <AppCrud />

  </div>
</template>

<script setup>
import buscarCEP from './components/buscarCEP.vue'
import WeatherClima from './components/WeatherClima.vue'
import UserLogin from './components/UserLogin.vue'
import AppCrud from './components/AppCrud.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>
