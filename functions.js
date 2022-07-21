//FILTER
const aPagarEmReais = [10, 20, 40, 100];
// const aPagarEmDolar = aPagarEmReais.filter((valor) => valor > 50);

// console.table(aPagarEmDolar);

//FIND, TRAZ O PRIMEIRO VALOR ENCONTRADO, CASO QUEIRA TRAZER O INDICE USAR findIndex
const aPagarEmReais = [10, 20, 40, 100];
const aPagarEmDolar = aPagarEmReais.find((valor) => valor > 30);

console.table(aPagarEmDolar);
