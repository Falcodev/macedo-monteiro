<template>
  <div class="login-wrapper">
    <form class="login-form" @submit="handleLogin">
      <img src="../../assets/macedo.jpg" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Senha" v-model="senha" />
      <button type="submit">Entrar</button>
      <p>Esqueceu sua senha?</p>
    </form>
  </div>
</template>

<script>
import api from "../../services/api";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      senha: ""
    };
  },

  methods: {
    async handleLogin(e) {
      e.preventDefault();

      try {
        const data = { email: this.email, senha: this.senha };
        const response = await api.post("login", data);
        localStorage.setItem("token", response.data.token);
        this.$router.push("/home");
      } catch (err) {
        alert("Login falhou. Tente novamente.");
      }
    }
  }
};
</script>

<style lang="scss" src="./style.scss" scoped />
