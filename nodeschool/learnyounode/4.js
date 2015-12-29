var fs = require('fs');
var fpath = process.argv[2];

function rivit() {
	fs.readFile(fpath, function (err, fileContents){
		
		var fc = fileContents.toString().split('\n');
	
		console.log(fc.length - 1);
			
			
	})
	

}

rivit();
