<template>
  <div class="main">
    <div class="container-sm">
      <form>
        <div class="form-group row">
          <label for="inputText3" class="col-sm-2 col-form-label"
            >Solicitante</label
          >
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputTextl3" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputData3" class="col-sm-2 col-form-label">Data</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="inputData3" />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">
              Aprovação Minima
            </legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" value="option1" />
                <label class="form-check-label">
                  1 Sócio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="option2" />
                <label class="form-check-label">
                  2 Sócio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="option3" />
                <label class="form-check-label">
                  80% dos Sócios
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensagem</label>
          <textarea class="form-control" id="descricao" rows="3"></textarea>
        </div>
      </form>
      <div class="container">
        <button type="button" class="btn btn-primary">Criar</button>
        <button type="button" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbrirPendenciaComponent"
};
</script>

<style lang="scss" src="./abrirPend.scss" scoped />
