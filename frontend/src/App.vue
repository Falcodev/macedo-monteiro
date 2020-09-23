<template>
  <div id="app">
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

<style></style>
