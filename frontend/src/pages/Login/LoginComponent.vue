<template>
<div class="main">
    <div class="login">
        <div class="content-login">
            <header>
              <img src="../../assets/macedo.jpg" alt="" width="200" height="100">
            </header>
            <div class="form">
            <form>
        <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail">
        <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
        </div>
        <div class="form-group">
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
     </div>
     <button type="submit" class="btn btn-primary btn-lg btn-block" @click.prevent="login">Entrar</button>
     <a class="nav-link" href="#">Esqueceu a Senha</a>
    </form>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
  name: 'LoginComponent',

  data(){
      return{

      }
  },

  methods: {
      login (){
          this.$router.push({name:'home'})
      }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
