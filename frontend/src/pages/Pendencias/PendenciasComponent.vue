<template>
<div class="main">
    <NavbarComponent/>
    <FooterComponent/>
  
    <div class="container">
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" @click="solicitar">Solicitar Aprovação</button>
  <button type="button" class="btn btn-secondary" @click="abrir">Abrir Pendencias</button>
  <button type="button" class="btn btn-secondary">Excluir</button>
    </div>
    </div>
    <div class="container">
        <form @submit.prevent="addTodo(todo)"  class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <input type="text"  v-model="todo.description" class="form-control"  placeholder="Abrir Pendencias">
  </div>
  <button type="submit"  class="btn btn-primary mb-2">Adcionar</button> 
</form> 
    
    </div>
    <div class="container">
        <div class="todo-list">
            <Todo v-for="t in todos" :key="t.id" @toggle="toggleTodo(todo)" :todo="t"/>
    </div>
</div>
  
</div>
    
</template>

<script>
import NavbarComponent from '../Navbar/NavbarComponent'
import FooterComponent from '../Footer/FooterComponent'
import Todo from '../../components/Todo'

export default {
    name:'PendenciasComponent',
    components:{
        NavbarComponent,
        FooterComponent,
        Todo
    },

    data(){
        return{
            todos:[],
            todo:{checked: false},
        }
    },

    methods:{
        solicitar(){
            this.$router.push({name:'solicitar_aprovacao'})
        },
        abrir(){
            this.$router.push({name:'abrirpendencia'})
        },

        addTodo(todo){
            todo.id = Date.now()
            this.todos.push(this.todo)
            this.todo = {checked: false}
        },

        toggleTodo(todo){
            const index = this.todos.findIndex(item => item.id ===todo.id)
            if(index > -1){
                const checked = !this.todos[index].checked
                this.$set(this.todos, index, {...this.todos[index], checked})
            }
        }
    }
}
</script>

<style lang="scss" src="./pendencias.scss" scoped/>
    



    