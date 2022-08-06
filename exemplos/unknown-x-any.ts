let anyEstaDeVolta:any;

anyEstaDeVolta = 4;
anyEstaDeVolta = 'teste';

let stringTeste:string = 'verificar';
stringTeste = anyEstaDeVolta

let unknownValue:unknown;

unknownValue = 4;
unknownValue = "opa"

let stringTeste2:string = 'verificar';

if(typeof unknownValue === 'string'){
    stringTeste2 = unknownValue;
}

function jogaErro(erro:string, codigo:number):never{
    throw{error:erro,code:codigo}
}

jogaErro('deu erro',500);