<template>
  <div class="main">
    <header>Selecione um sócio</header>
    <div class="container">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">Rafael</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">Raul</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="option3"
        />
        <label class="form-check-label" for="inlineCheckbox3">Renato</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="option3"
        />
        <label class="form-check-label" for="inlineCheckbox3">Nilza</label>
      </div>
    </div>

    <div class="container-md">
      <div class="form-group">
        <label for="exampleFormControlTextarea1"
          >Enviar Mensagem para e-mail</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
    </div>

    <div class="container">
      <button type="button" class="btn btn-primary">Enviar</button>
      <button type="button" class="btn btn-primary">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolicitarAprovacaoComponent"
};
</script>

<style lang="scss" src="./solicitaprov.scss" scoped />
