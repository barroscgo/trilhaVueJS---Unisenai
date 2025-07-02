import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    usuario: null
  }),
  actions: {
    login(token, usuario) {
      this.token = token
      this.usuario = usuario
    },
    logout() {
      this.token = null
      this.usuario = null
    }
  }
})
