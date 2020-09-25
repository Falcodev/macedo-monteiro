<template>
  <div class="pendencia-content">
    <div class="pdf-wrapper" id="content">
      <div>
        <h4>
          Foi atualizado pelos sócios a solicitação de número abaixo descritos:
        </h4>
        <p><b>Assunto: </b> {{ this.pendencia.assunto }}</p>
        <p><b>Solicitante: </b> {{ this.pendencia.solicitante }}</p>
        <p>
          <b>Data: </b>
          {{ this.info.data }}
        </p>
        <p><b>Descrição</b> {{ this.info.mensagem }}</p>
      </div>

      <div>
        <h5>Aprovado por:</h5>
        <div v-for="pessoa in this.pendencia.votos" :key="pessoa._id">
          - {{ pessoa.nomePessoa }}
        </div>
      </div>
    </div>
    <button @click="gerarPDF">Gerar PDF</button>
    <div id="pdf"></div>
  </div>
</template>

<script>
import api from "../../services/api";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default {
  name: "PendenciaAprovadaComponent",
  props: ["id"],
  data() {
    return {
      pendencia: [],
      info: []
    };
  },
  methods: {
    gerarPDF() {
      html2canvas(document.getElementById("content"), {
        scrollY: -window.scrollY
      }).then(canvas => {
        document.getElementById("pdf").appendChild(canvas);
        let img = canvas.toDataURL("image/jpeg");
        let pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });
        pdf.addImage(img, "PNG", 0, 0, 210, 297);
        pdf.save("pendencia.pdf");
        document.getElementById("pdf").innerHTML = "";
      });
    }
  },

  beforeMount() {
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
        this.info = res.data.chat[0].chat[0];
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" src="./styles.scss" scoped />
