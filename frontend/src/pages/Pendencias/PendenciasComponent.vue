<template>
  <div class="pendencias-wrapper">
    <router-link
      :to="{ name: 'abrir-pendencia' }"
      tag="button"
      class="nova-pendencia"
    >
      Abrir Nova Pendência
    </router-link>
    <div class="table-wrapper">
      <div class="table-header">
        <p>Página atual: {{ paginaAtual }}</p>
        <span>
          <label>Quantidade </label>
          <input type="number" v-model="tamanho" />
        </span>
      </div>

      <table>
        <tr>
          <th>Data</th>
          <th>Assunto</th>
          <th>Situação</th>
          <th>Excluir</th>
        </tr>
        <tr
          v-for="pendencia in this.paginacao"
          :key="pendencia._id"
          class="items"
        >
          <td>{{ pendencia.data.slice(0, 10) }}</td>
          <td>{{ pendencia.assunto }}</td>
          <td>{{ pendencia.situacao }}</td>
          <td>
            <button class="delete">
              <img src="../../assets/icons/trash.svg" />
            </button>
          </td>
        </tr>
      </table>

      <div class="buttons">
        <button @click="voltar">Voltar</button>
        <button @click="avancar">Avançar</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
export default {
  name: "PendenciasComponent",

  data() {
    return {
      pendencias: [],
      tamanho: 5,
      paginaAtual: 1
    };
  },

  beforeMount() {
    api
      .get("todos/pendencias", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        this.pendencias = res.data.res;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    avancar: function() {
      if (this.paginaAtual * this.tamanho < this.pendencias.length) {
        this.paginaAtual++;
        this.paginacao();
      }
    },
    voltar: function() {
      if (this.paginaAtual > 1) this.paginaAtual--;
    }
  },

  computed: {
    paginacao: function() {
      return this.pendencias.filter((row, index) => {
        let start = (this.paginaAtual - 1) * this.tamanho;
        let end = this.paginaAtual * this.tamanho;
        if (index >= start && index < end) return true;
      });
    }
  }
};
</script>

<style lang="scss" src="./pendencias.scss" scoped />
