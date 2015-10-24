var fs = require('fs');

console.log("Vou ler", Date.now());
console.log("leitura");

var file = fs.readFileSync('1.zip');

console.log("Já li", Date.now());