<template>
  <div class="main">
    <NavbarComponent/>
    <FooterComponent/>
     <div class="texto">
    <div class="container-md">
       <h1 class="mt-5">Quem Somos</h1>
       <p class="lead">
           A empresa Macedo Monteiro é um Holding Patrimonial que surgiu com o propósito de solucionar questões tributárias, e centralizar recursos a fim de facilitar na aquisição de ativos de maiores valores. Atualmente é constituída pelos sócios Nilza, Rafael, Raul e Renato. Seus maiores ativos são bens, que variam entre terrenos, casas e apartamentos. Atualmente, conta com um capital sobre gestão de mais de 10 milhões, possuindo mais de 70 imóveis sobre administração. Por sua grandeza, e alinhado ao crescimento de forma ordenada e transparente, criou esse portal a fim de disponibilizar para acionistas e colaboradores uma ferramenta segura, clara e coesa sobre as ações rotineiras da empresa.
       </p>
   </div>
   </div>
  </div>
</template>

<script>
import NavbarComponent from '../Navbar/NavbarComponent'
import FooterComponent from '../Footer/FooterComponent'

export default {
    name: 'HomeComponent',
  components:{
    NavbarComponent,
    FooterComponent,
  }
    
};
</script>
<style lang="scss" src="./home.scss" scoped/>
