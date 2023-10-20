// criando interface usuário
interface Usuario{
    nome: string;
    nickname: string;
    email: string;
    dataNascimento: string;
    genero: string;
}

// criando objeto de usuário
let usuario1: Usuario = {
    nome: 'Victor',
    nickname: 'victorpaliari',
    email: 'victor@email.com',
    dataNascimento: '19/02/1999',
    genero: 'homem cis'
}

let usuario2: Usuario = {
    nome: 'Lucas',
    nickname: 'lucaspaixo',
    email: 'lucas@email.com',
    dataNascimento: '07/12/2001',
    genero: 'homem cis'
}

// retornar usuários

function listarUsuario(usuario : Usuario){
    return `${usuario.nome} ${usuario.nickname}`;
}

console.log(listarUsuario(usuario1))
console.log(listarUsuario(usuario2))