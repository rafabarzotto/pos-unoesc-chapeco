var fs = require(fs);

console.log("Vou ler", Date.now());
console.log("leitura");

fs.readFile("1.mp4", function(err, data){
	console.log(data);
});

console.timeEnd("leitura");
console.log("Já li", Date.now());