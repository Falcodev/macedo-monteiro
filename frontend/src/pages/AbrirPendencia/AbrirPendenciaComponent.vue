<template>
  <div class="nova-pendencia-wrapper">
    <h1>Cadastrar Nova Pendência</h1>
    <form type="submit" @submit="abrirPendencia">
      <table>
        <tr>
          <td>Solicitante</td>
          <td>
            <input type="text" disabled v-model="data.solicitante" />
          </td>
        </tr>
        <tr>
          <td>Aprovação mínima</td>
          <td>
            <select name="aprovacao" v-model="data.opcao">
              <option value="um">1 Sócio</option>
              <option value="dois">2 Sócios</option>
              <option value="oitenta">80%</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Assunto</td>
          <td>
            <input type="text" v-model="data.assunto" />
          </td>
        </tr>
        <tr>
          <td><h2>Descrição</h2></td>
          <td>
            <textarea v-model="data.chat.mensagem"></textarea>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><button type="submit">Criar</button></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import api from "../../services/api";

export default {
  name: "AbrirPendenciaComponent",
  data() {
    return {
      data: {
        solicitante: localStorage.getItem("username"),
        opcao: "",
        assunto: "",
        chat: {
          mensagem: "",
          autor: localStorage.getItem("username"),
          data: new Date()
        }
      }
    };
  },
  methods: {
    async abrirPendencia(e) {
      e.preventDefault();
      try {
        const response = await api.post("pendencias", this.data, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        this.$router.push({
          name: "pendencia-especifica",
          params: { id: response.data.res._id }
        });
        alert("Pendência criada com sucesso!");
      } catch (err) {
        alert("Erro ao criar pendência");
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" src="./abrirPend.scss" scoped />
