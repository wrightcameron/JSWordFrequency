//Command line arguments
/*process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
*/
if(process.argv.length == 2 || process.argv.length > 3){
    process.stdout.write("$node wf.js <textFile>");
    process.exit();
}

//process.stdout.write(process.argv.length.toString());
//Read text file
var fs = require('fs');
try {  
    var data = fs.readFileSync(process.argv[2], 'utf8'); 
} catch(e) {
    console.log('Error:', e.stack);
}
console.log(data);
/*
with open(sys.argv[1]) as file:
    readData = file.read()
    readData = readData.strip()
    readData = readData.lower()
    readData = removeChar(readData,",.;:&!?_-")
    readData = readData.split()
*/

//store word frequencies in dict

//Print word frequncies