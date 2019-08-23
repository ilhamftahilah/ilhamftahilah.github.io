function balikcoy(string){
  
    var balik='';
    
    for(var i=string.length-1; i>=0; i--){
      balik=balik+string[i];
    }
    return balik;
    
  }
  
  console.log(balikcoy('hello world coy wkwkwkwk!'));