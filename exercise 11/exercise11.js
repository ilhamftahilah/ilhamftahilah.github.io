
function balikKata(kata) {
  var ilham = '';
   for( var i = kata.length - 1; i >= 0; i-- ){
     ilham = ilham + kata[i];
   }
   return ilham;
 }
 
 // TEST CASES
 console.log(balikKata('Hello Semuanya')); // sredoC dna dlroW olleH
 console.log(balikKata('ilham fatahilah')); // eoD nhoJ
 console.log(balikKata('saya mengikuti traning')); // mrowkoob a ma I
 console.log(balikKata('this is my hobby')); // ybboh ym si gnidoC
 console.log(balikKata('oke')); // repuS