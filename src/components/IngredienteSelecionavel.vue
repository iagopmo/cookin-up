<template>
    <button
        class="ingrediente"        
        v-on:click="selecionado = !selecionado"
        :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<script lang="ts">
// v-on -> diretiva que permite escutar eventos do DOM
// :aria-pressed -> acessibilidade -> diz se ele esta selecionado ou nao
// diretiva v-on: click tambem pode ser @click
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() { //criando um estado em data()
        return {
            selecionado: false
        }
    }
}
</script>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>