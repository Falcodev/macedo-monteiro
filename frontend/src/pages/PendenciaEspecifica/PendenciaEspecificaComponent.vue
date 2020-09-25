<template>
  <div class="pendencia-wrapper">
    <Mensagem :mensagem="this.pendenciaOpt" :dados="this.pendencia" />

    <div v-for="item in this.chat" :key="item._id">
      <Mensagem :mensagem="item" />
    </div>

    <div class="voto">
      Votar
      <button class="aprovar" @click="setVoto('aprovado')">Aprovar</button>
      <button class="recusar" @click="setVoto('reprovado')">Recusar</button>
    </div>

    <form @submit="mandarMensagem">
      <textarea v-model="mensagem"></textarea>
      <button type="submit">
        <img src="../../assets/icons/send.svg" />
      </button>
    </form>
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
      pendenciaOpt: [],
      mensagem: "",
      voto: ""
    };
  },

  methods: {
    async mandarMensagem(e) {
      e.preventDefault();
      if (this.mensagem == "") {
        alert("Escreva uma mensagem!");
        return;
      }

      const data = {
        id: this.pendencia._id,
        chat: {
          mensagem: this.mensagem,
          autor: localStorage.getItem("username"),
          data: new Date()
        }
      };
      try {
        const response = await api.put("chat", data, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        console.log(response.data);
        this.getInfo();
        this.mensagem = "";
      } catch (err) {
        alert("Ocorreu um erro ao mandar a mensagem.");
      }
    },

    votar() {
      const data = {
        pendencia: this.pendencia,
        idPessoa: localStorage.getItem("userId"),
        voto: this.voto
      };
      api
        .put("pendencias", data, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(res => {
          alert("Voto feito com sucesso!");
          console.log(res);
          this.getInfo();
        })
        .catch(err => {
          alert("Erro ao votar");
          console.log(err);
        });
    },

    setVoto(voto) {
      this.voto = voto;
      this.votar();
    },

    getInfo() {
      api
        .get(
          `pendencias/${this.id}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`
            }
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
  },

  beforeMount() {
    this.getInfo();
  }
};
</script>

<style lang="scss" src="./styles.scss" scoped />
