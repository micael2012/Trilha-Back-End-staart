// run `node index.js` in the terminal

const bandeiras = [
  ['Brasil', ['verde', 'Amarelo', 'Azul', 'Branco']],
  ['Canada', ['Verde', 'Branco']],
  ['Mexico', ['Verde', 'Branco', 'Vermelho']],
  ['EUA', ['Azul', 'Branco', 'Vermelho']],
];

// console.log(bandeiras[0][1][0]);
// console.table(bandeiras[0][1][0]);

const redesSociais = [
  'Instagram',
  'Youtube',
  'Facebook',
  'TikTok',
  'Twitter',
  'Linkedin',
  'Pinterest',
];

const tiktok = redesSociais.indexOf('TikTok');
// console.log(tiktok);
// console.log(redesSociais.includes('Facebook'));

for (let i = 0; i < redesSociais.length; i++) {
  // console.log(redesSociais[i]);
}

for (let i in redesSociais) {
  // console.log(i + ': ' + redesSociais[i]);
  //interpolação
  // console.log(`${i}: ${redesSociais[i]}`);
}

//intera pelo valor e não pelo indice como for in
for (let valor of redesSociais) {
  console.log(valor);
}

//valor = indice, redes = uma cópia, apelido para o array no caso redesSociais
redesSociais.forEach((valor, indice, redes) => {
  // console.log(valor);
  // console.log(indice);
  // console.log(redes);
});

const aPagarEmReais = [10, 20, 40, 100];
const cotacaoDola = 5;
const aPagarEmDolar = aPagarEmReais.map((valor) => valor * cotacaoDola);

console.table(aPagarEmReais);
console.table(aPagarEmDolar);

