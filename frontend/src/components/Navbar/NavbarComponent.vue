<template>
  <div class="nav-wrapper">
    <div class="logo">
      <router-link :to="{ name: 'home' }"
        ><img src="../../assets/macedo-sem-fundo.png" alt=""
      /></router-link>
    </div>
    <ul>
      <li>
        <select
          name="macedo-monteiro"
          v-model="selected"
          @change="changeRoute($event)"
        >
          <option value="" disabled hidden>Macedo Monteiro</option>
          <option value="home">
            Sobre
          </option>
          <option value="estrutura-organizacional"
            >Estrutura Organizacional</option
          >
          <option value="ativos">Ativos</option>
          <option value="alterar-senha">Alterar Senha</option>
          <optgroup label="Financeiro">
            <option value="contas-pagar">Contas a pagar</option>
            <option value="contas-receber">Contas a receber</option>
            <option value="emissao-boleto">Emissão de Boletos</option>
            <option value="relatorios">Relatórios</option>
          </optgroup>
        </select>
      </li>
      <li>
        <router-link tag="li" :to="{ name: 'divulgacao-de-resultados' }"
          >Divulgação de Resultados</router-link
        >
      </li>
      <li>
        <router-link tag="li" :to="{ name: 'pendencias' }"
          >Pendências</router-link
        >
      </li>
      <li>
        <a
          href="https://drive.google.com/drive/folders/1GQt83CZpgFLgzjRvS7BFGN9qL6IxRjGZ"
          target="_blank"
          >Arquivos</a
        >
      </li>
      <li><router-link tag="li" :to="{ path: '/' }">Sair</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: function() {
    return { selected: "" };
  },
  methods: {
    changeRoute(event) {
      const path = event.target.value;
      this.$router.push({ path: `${path}` });
      this.selected = "";
    }
  }
};
</script>

<style lang="scss" src="./navbar.scss" scoped />
