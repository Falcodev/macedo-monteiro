<template>
  <div class="mensagem-wrapper" v-bind:class="{ 'wrapper-blue': this.main }">
    <div class="mensagem-header">
      <p class="mensagem-nome">
        <b>
          <p v-if="this.main">
            Nome do Solicitante:
          </p>
          <p v-else>Nome:</p>
        </b>
        {{ this.mensagem.autor }}
      </p>
      <p>
        <b>Data e Hora:</b>
        {{ this.mensagem.data }}
      </p>
      <p v-if="this.main"><b>Aprovação mínima: </b> {{ this.dados.opcao }}</p>
      <p v-if="this.main"><b>Situação: </b> {{ this.dados.situacao }}</p>
    </div>
    <p class="mensagem-mensagem" v-bind:class="{ 'mensagem-blue': this.main }">
      {{ this.mensagem.mensagem }}
    </p>
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
  },
  beforeMount() {
    if (this.dados) this.main = true;
  }
};
</script>

<style lang="scss" src="./styles.scss" />
