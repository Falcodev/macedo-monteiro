<template>
  <div class="main">
    <header>Carregar Resultado</header>
    <div class="container">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          @click.prevent="toggle()"
        >
          Escolha um Trimestre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">1 Trimestre</a>
          <a class="dropdown-item" href="#">2 Trimestre</a>
          <a class="dropdown-item" href="#">3 Trimestre</a>
          <a class="dropdown-item" href="#">4 Trimestre</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CriarNovoComponent",
  data() {
    return {
      isOpen: true
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" src="./novo.scss" scope />
