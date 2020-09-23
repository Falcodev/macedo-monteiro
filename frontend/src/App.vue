<template>
  <div id="app" class="layout">
    <NavbarComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";

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
</style>
