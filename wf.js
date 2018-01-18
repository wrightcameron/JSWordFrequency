//Command line arguments
if(process.argv.length == 2 || process.argv.length > 3){
    process.stdout.write("$node wf.js <textFile>");
    process.exit();
}

//Read text file
var fs = require('fs');
try {  
    var data = fs.readFileSync(process.argv[2], 'utf8'); 
} catch(e) {
    console.log('Error:', e.stack);
}
data = data.trim().toLowerCase();
data = data.replace(/[|&;:$%@"<>()+,.]/g,"");
var wordList = data.split(" ");
//console.log(data);
//for (var i in wordList) {  
//    console.log(wordList[i]);
//}  
/*
with open(sys.argv[1]) as file:
    readData = file.read()
    readData = readData.strip()
    readData = readData.lower()
    readData = removeChar(readData,",.;:&!?_-")
    readData = readData.split()
*/

//store word frequencies in dict
var wordDict = {};
//console.log(wordList);
for(var i in wordList){
    word = wordList[i];
    //console.log(word);
    if(word in wordDict){
        wordDict[word] = wordDict[word] + 1;
    }else{
        wordDict[word] = 1;
    }
}

for(var key in wordDict) {
    var value = wordDict[key];
    console.log(key+" "+value);
  }

//Print word frequncies