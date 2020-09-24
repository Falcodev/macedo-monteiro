<template>
  <div class="pendencia-wrapper">
    <Mensagem :mensagem="this.pendenciaOpt" :dados="this.pendencia" />

    <div v-for="item in this.chat" :key="item._id">
      <Mensagem :mensagem="item" />
    </div>
  </div>
</template>

<script>
import api from "../../services/api";

import Mensagem from "../../components/Mensagem/Mensagem";

export default {
  name: "PendenciaEspecificaComponent",
  props: ["id"],
  components: {
    Mensagem
  },
  data() {
    return {
      pendencia: [],
      chat: [],
      pendenciaOpt: []
    };
  },

  beforeMount() {
    api
      .get(
        `pendencias/${this.id}`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        },
        { id: this.id }
      )
      .then(res => {
        this.pendencia = res.data.pendencia;
        this.chat = res.data.chat[0].chat;
        this.pendenciaOpt = this.chat[0];
        this.chat.shift();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" src="./styles.scss" scoped />
