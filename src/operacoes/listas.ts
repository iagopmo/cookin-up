// arquivo utilitario para operações envolvendo listas em javascript
// se todos itens da lista1 estiverem inclusos na lista2, traz true
export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    return lista1.every((itemLista1) => lista2.includes(itemLista1));
}