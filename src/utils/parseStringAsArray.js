
module.exports =  function parserStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(s => s.trim());
} 