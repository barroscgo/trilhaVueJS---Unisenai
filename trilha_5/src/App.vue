<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- exerc 2 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">Testando VueJS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Serviços</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-5 flex-grow-1">

      <!-- exerc 1 e 5 -->
      <div class="row text-center mb-5">
        <div class="col-lg-3 col-md-6 col-12 mb-3">
          <div class="p-4 bg-light border rounded">Resumo</div>
        </div>
        <div class="col-lg-6 col-md-6 col-12 mb-3">
          <div class="p-4 bg-white border rounded shadow-sm">Gráficos</div>
        </div>
        <div class="col-lg-3 col-md-12 col-12">
          <div class="p-4 bg-light border rounded">Atalhos</div>
        </div>
      </div>

      <!-- exerc 3 -->
      <div class="text-center mb-4">
        <button
          :class="['btn', currentColor, 'custom-btn']"
          @click="toggleColor"
        >
          Alternar Estilo
        </button>
      </div>

      <!-- exerc 4 -->
      <div class="card custom-card mb-5 mx-auto" style="max-width: 22rem;">
        <img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" class="card-img-top" alt="Imagem de destaque">
        <div class="card-body">
          <h5 class="card-title">Destaque</h5>
          <p class="card-text">Conteúdo personalizado com SCSS.</p>
          <button class="btn btn-outline-warning" @click="alert('Ação do Card!')">Detalhes</button>
        </div>
      </div>

      <!-- exerc 6 -->
      <div class="text-center mb-5">
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalInfo">Abrir Informações</button>
      </div>
      <div class="modal fade" id="modalInfo" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informativo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              Sistema atualizado com sucesso!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>

      <!-- exerc 7 -->
      <form class="row g-3 needs-validation" novalidate @submit.prevent="submitForm">
        <div class="col-md-4">
          <label class="form-label">Nome</label>
          <input type="text" class="form-control" v-model="form.nome" required>
        </div>
        <div class="col-md-4">
          <label class="form-label">E-mail</label>
          <input type="email" class="form-control" v-model="form.email" required>
        </div>
        <div class="col-md-4">
          <label class="form-label">Senha</label>
          <input type="password" class="form-control" v-model="form.senha" required>
        </div>
        <div class="col-12">
          <button class="btn btn-primary mt-2" type="submit">Enviar</button>
        </div>
      </form>

      <!-- exerc 10 -->
      <TabsComponent class="mt-5" />

    </main>

    <!-- exerc 9 -->
    <footer>
      <p class="mb-0">&copy; 2025 Gabriel | Painel Interativo</p>
    </footer>
  </div>
</template>

<script>
import TabsComponent from './components/TabsComponent.vue'

export default {
  components: {
    TabsComponent
  },
  data() {
    return {
      currentColor: 'btn-primary',
      form: {
        nome: '',
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    toggleColor() {
      this.currentColor = this.currentColor === 'btn-primary' ? 'btn-danger' : 'btn-primary';
    },
    submitForm() {
      if (this.form.nome && this.form.email && this.form.senha) {
        alert("Formulário enviado com sucesso!");
      } else {
        alert("Preencha todos os campos corretamente.");
      }
    }
  }
}
</script>

<style scoped>
@import "@/assets/style.css";
</style>
