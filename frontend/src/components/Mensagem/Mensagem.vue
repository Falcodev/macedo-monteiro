<template>
  <div class="mensagem-wrapper">
    <div class="mensagem-header">
      <p>
        <b>Nome do Solicitante:</b>
        {{this.mensagem.autor}}
      </p>
      <p>
        <b>Data e Hora:</b>
        {{this.mensagem.data}}
      </p>
    </div>
    <p class="mensagem-mensagem">{{this.mensagem.mensagem}}</p>
  </div>
</template>

<script>
export default {
  name: "Mensagem",
  props: ["mensagem", "dados"],
  data() {
    return {
      main: ""
    };
  }
};
</script>

<style lang="scss" src="./styles.scss"/>