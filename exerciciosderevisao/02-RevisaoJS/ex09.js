// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.
let produto=`banana`;
let preco=250;
let quantidade=250;
let total=(preco*quantidade);
console.log(`o total do valor foi ${preco*quantidade}`)
if (total>=500){
    console.log(`recebera desconto de 15% R$${ total-(total*0.15) }`)
}
else{
    console.log(`nao recebera desconto`)
}