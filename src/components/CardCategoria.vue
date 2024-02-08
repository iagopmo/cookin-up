<template>
  {{ categoria.nome }}
  {{ categoria.imagem }}
</template>

<script lang="ts">
// import type ICategoria from '@/interfaces/ICategorias';
import type ICategoria from '../interfaces/ICategorias';
import type { PropType } from 'vue';

export default {
    props: { //qndo quer passar propriedades de um componente para outro
        categoria: { type: Object as PropType<ICategoria>, required: true} // <ICategoria> -> generics , informa tipo mais especifico da categoria
    }
}
</script>