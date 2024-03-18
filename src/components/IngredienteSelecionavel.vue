<template>
    <button
        class="ingrediente"        
        @click="aoClicar"
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
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado;

            if(this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            } else {
                this.removerIngrediente();        
            }            
        },
        removerIngrediente() {
            this.$emit('removerIngrediente', this.ingrediente);
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']  //emits -> lista declarando eventos personalizados q o componente é capaz de emitir e ajuda a prevenir erros com o nome do evento personalizado
}
</script>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>