<template>
  <div id="app" class="layout">
    <div
      class="showComponent"
      v-if="
        this.$route.name != 'login' && this.$route.name != 'pendencia-aprovada'
      "
    >
      <NavbarComponent />
    </div>

    <router-view></router-view>
    <div
      class="showComponent"
      v-if="
        this.$route.name != 'login' && this.$route.name != 'pendencia-aprovada'
      "
    >
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./components/Navbar/NavbarComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.showComponent {
  width: 100%;
}
</style>
