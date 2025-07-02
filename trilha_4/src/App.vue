<template>
  <v-app>
    <!-- exec 5 -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item title="Painel" />
        <v-list-item title="Produtos" />
        <v-list-item title="Login" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Painel Administrativo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="mt-8">

        <!-- exerc 1 -->
        <v-row class="mb-6">
          <v-col cols="12" sm="4" v-for="n in 3" :key="n">
            <v-card class="pa-4 text-center elevation-2">
              <v-icon size="40" color="primary">mdi-view-grid</v-icon>
              <div class="text-subtitle-1 mt-2">Coluna {{ n }}</div>
            </v-card>
          </v-col>
        </v-row>

        <!-- exerc 2 -->
        <v-btn class="custom-btn mb-6" @click="console.log('Botão clicado!')">
          Botão com estilo CSS externo
        </v-btn>

        <!-- exerc 3 -->
        <v-card class="mb-6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            height="200px"
          />
          <v-card-title>Card Promocional</v-card-title>
          <v-card-actions>
            <v-btn color="secondary" @click="mostrarAlerta">Ativar Promoção</v-btn>
          </v-card-actions>
        </v-card>

        <!-- exerc 4 -->
        <v-btn color="success" @click="dialog = true" class="mb-6">
          Abrir Modal
        </v-btn>
        <v-dialog v-model="dialog" max-width="400">
          <v-card>
            <v-card-title>Aviso</v-card-title>
            <v-card-text>Sistema em manutenção das 22h às 23h.</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="red" text @click="dialog = false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- exerc 6 -->
        <h3 class="mb-2">Estoque Local</h3>
        <v-data-table :headers="headers" :items="produtos" class="mb-6" />

        <!-- exerc 7 -->
        <h3 class="mb-2">Login</h3>
        <v-form ref="form" v-model="valido">
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="[rules.required, rules.email]"
          />
          <v-text-field
            label="Senha"
            v-model="senha"
            type="password"
            :rules="[rules.required]"
          />
          <v-btn class="custom-btn mt-2" @click="login">Entrar</v-btn>
        </v-form>

        <!-- exerc 10 -->
        <h3 class="mt-10 mb-2">Produtos</h3>
        <v-data-table
          :headers="apiHeaders"
          :items="produtosAPI"
          :loading="loading"
          loading-text="Carregando produtos..."
          class="mb-10"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      dialog: false,
      valido: false,
      email: '',
      senha: '',
      rules: {
        required: v => !!v || 'Campo obrigatório',
        email: v => /.+@.+\..+/.test(v) || 'E-mail inválido'
      },
      produtos: [
        { nome: 'Notebook Gamer', preco: 'R$ 4.500', estoque: 10 },
        { nome: 'Monitor 24"', preco: 'R$ 900', estoque: 5 },
        { nome: 'Headset', preco: 'R$ 300', estoque: 0 }
      ],
      headers: [
        { text: 'Produto', value: 'nome' },
        { text: 'Preço', value: 'preco' },
        { text: 'Estoque', value: 'estoque' }
      ],
      produtosAPI: [],
      apiHeaders: [
        { text: 'Nome', value: 'title' },
        { text: 'Preço', value: 'price' },
        { text: 'Categoria', value: 'category' }
      ],
      loading: false
    };
  },
  methods: {
    mostrarAlerta() {
      alert('Promoção ativada!');
    },
    login() {
      if (this.$refs.form.validate()) {
        alert('Login realizado com sucesso!');
      }
    },
    async carregarAPI() {
      this.loading = true;
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        this.produtosAPI = data;
      } catch (error) {
        alert('Erro ao carregar produtos da API');
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.carregarAPI();
  }
};
</script>

<style scoped>
@import "@/css/style.css";
</style>
