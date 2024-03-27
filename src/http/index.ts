import type ICategoria from "@/interfaces/ICategorias";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
    const resposta = await fetch(url);
    return resposta.json() as T;
}

export async function obterCategorias() {
    // faz uma requisição get
    return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
    // const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
    // const categorias : ICategoria[] = await resposta.json();    
    // return categorias;
}

export async function obterReceitas() {
    return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
    // const resposta = await fetch('');
    // const receitas : IReceita[] = await resposta.json();
    // return receitas;
}