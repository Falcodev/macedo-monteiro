<template>
    <div class="title" :class="{checked: todo.checked}">
        <div class="title-content">
            <p class="subtitle">{{todo.description}}</p>
        </div>
            <div class="title-aciton">
                <button type="button" @click="$emit('toggle', todo)" class="btn btn-primary">Concluido</button>
                <div class="btn"><button type="button" class="btn btn-danger">Remover</button></div>
                
            </div>
        </div>
</template>

<script>
export default {
    props:{
        todo: {type:Object, require: true}
    }
}
</script>

<style scoped>
.checked{
    text-decoration: line-through;
    color: gray;
}
</style>