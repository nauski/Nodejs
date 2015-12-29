var fs = require('fs');
var fpath = process.argv[2];

var fcont = fs.readFileSync(fpath).toString();

var lista = fcont.split("\n");
var pituus = lista.length - 1;


//var newlines = lista.length()-1;
console.log(pituus);
//console.log(lista);
//console.log(fpath);
//console.log(fcont);
