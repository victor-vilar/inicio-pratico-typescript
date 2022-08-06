enum Profissao{
    Desenvolvedora,
    Atriz,
    Professora,
    JogadoraFutebol
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao?:Profissao
}

interface Estudante extends Pessoa {
    materias:string[]
}


const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao:"desenvolvedora"
}

pessoa.idade = 25;

const andrea: {nome:string,idade:number,profissao:string} = {
        nome: "Andrea",
        idade: 28,
        profissao:"Advogada" 
}    

const paula: {nome:string,idade:number,profissao:string} = {
    nome: "Paula",
    idade: 28,
    profissao:"Desenvolvedora" 
} 



const vanessa:Pessoa ={
    nome:"Vanessa",
    idade:25,
    profissao:Profissao.JogadoraFutebol
}

const maria:Pessoa ={
    nome:"Maria",
    idade:24,
    profissao:Profissao.Professora
}

const jessica:Estudante = {
    nome:"Jessica",
    idade:22,
    profissao:Profissao.Professora,
    materias: ['Matematica','Programaçao']
}

function listar(lista:string[]){

        for(const item of lista){
            console.log('-' + item);
        }
}


listar(jessica.materias);