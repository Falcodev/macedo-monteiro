<template>
  <div class=""></div>
</template>

<script>
import api from "../../services/api";
export default {
  name: "PendenciaEspecificaComponent",
  props: ["id"],
  data() {
    return {
      pendencia: []
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
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" src="./styles.scss" scoped />
