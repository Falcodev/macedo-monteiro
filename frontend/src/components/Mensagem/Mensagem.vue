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

    <div class="mensagem-votos" v-if="this.main">
      <p><b>Assunto: </b> {{ this.dados.assunto }}</p>
      <div class="votos">
        <div class="voto" v-for="voto in this.dados.votos" :key="voto._id">
          {{ voto.nomePessoa }}
          <div v-if="voto.voto == 'aprovado'">
            <img src="../../assets/icons/check.svg" />
          </div>
          <div v-else>
            <img src="../../assets/icons/x.svg" />
          </div>
        </div>
      </div>
    </div>

    <p class="mensagem-mensagem" v-bind:class="{ 'mensagem-blue': this.main }">
      {{ this.mensagem.mensagem }}
    </p>

    <div
      class="mensagem-pdf"
      v-if="this.main && this.dados.situacao == 'aprovado'"
    >
      <button @click="goToPDF(dados._id)">Gerar PDF</button>
    </div>
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
  methods: {
    goToPDF(id) {
      this.$router.push({ name: "pendencia-aprovada", params: { id: id } });
    }
  },
  beforeMount() {
    if (this.dados) this.main = true;
  }
};
</script>

<style lang="scss" src="./styles.scss" />
