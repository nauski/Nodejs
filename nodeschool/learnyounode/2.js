

var x = 0;
var myarray = process.argv;

	for (var i = 2; i < myarray.length; i++){
		
		x = x + Number(myarray[i]);

	}
console.log(x);
//console.log(myarray);
//console.log(process.argv);
