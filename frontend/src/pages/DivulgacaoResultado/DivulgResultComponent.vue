<template>
    <div class="main">
        <NavbarComponent/>
        <FooterComponent/>
        <h1 class="titulo">Central de Resultados</h1>
        <div class="container">
            <div class="botao-historico">
        <div class="dropdown">
            
  <button class="btn btn-primary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Historico
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Alguma ação</a>
    <a class="dropdown-item" href="#">Outra ação</a>
    <a class="dropdown-item" href="#">Alguma coisa aqui</a>
  </div>
</div>
    </div>
    <div class="adcionar-item">
        <button type="button" class="btn btn-primary btn-lg" @click.prevent="novo">Adcionar Novo</button>
    </div>
        </div>
    
    </div>
    
</template>

<script>
import NavbarComponent from '../Navbar/NavbarComponent'
import FooterComponent from '../Footer/FooterComponent'
export default {
    name:'DivulgResultComponent',

    components:{
        NavbarComponent,
        FooterComponent,
      
    },


    methods:{
        novo(){
            this.$router.push({name:'adcionarnovo'})
        }
    }
}
</script>

<style lang="scss" src="./result.scss" scoped/>

