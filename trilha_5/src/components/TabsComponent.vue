<template>
  <div class="mt-5">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab">
        <button
          class="nav-link"
          :class="{ active: currentTab === tab }"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </li>
    </ul>

    <div class="mt-3 p-3 border">
      <p v-if="currentTab === 'Perfil'">Conteúdo do Perfil</p>
      <p v-else-if="currentTab === 'Configurações'">Configurações do sistema</p>
      <p v-else-if="currentTab === 'Ajuda'">Central de ajuda e suporte</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['Perfil', 'Configurações', 'Ajuda'],
      currentTab: 'Perfil'
    }
  }
}
</script>
