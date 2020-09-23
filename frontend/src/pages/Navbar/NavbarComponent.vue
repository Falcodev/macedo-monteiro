<template>
  <div class="main">
    <div class="cabeca">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          src="../../assets/macedo-sem-fundo.png"
          alt=""
          width="100"
          height="50"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                @click="menu"
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Macedo Monteiro</a
              >
              <div
                v-show="isOpen"
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Estrutura Organizacional</a>
                <a class="dropdown-item" href="#">Financeiro</a>
                <a class="dropdown-item" href="#">Ativos</a>
                <a class="dropdown-item" href="#">Alterar Senha</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="result"
                >Divulgação de Resultado</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="pend">Pendencias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Arquivos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="sair">Sair</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",

  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    result() {
      this.$router.push({ name: "divulgacaoderesultado" });
    },
    pend() {
      this.$router.push({ name: "pendencias" });
    },

    menu() {
      this.isOpen = !this.isOpen;
    },

    sair() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" src="./navbar.scss" scoped />
