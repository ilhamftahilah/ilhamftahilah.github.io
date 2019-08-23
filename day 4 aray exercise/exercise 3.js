function Coba (kelompok) {
  
    var okecuy='';
  
  for(var alkwdnkalwndkandlkalkwalawk=0; alkwdnkalwndkandlkalkwalawk<=kelompok.length-1; alkwdnkalwndkandlkalkwalawk++) {
    bacakesamping='';
    
    for(var b=0; b<=alkwdnkalwndkandlkalkwalawk; b++){}
  
    console.log('Nomor ID : '+kelompok[alkwdnkalwndkandlkalkwalawk][0]);
    console.log('Nama Lengkap lo siapa :'+kelompok[alkwdnkalwndkandlkalkwalawk][1]);
    console.log('TTL : '+kelompok[alkwdnkalwndkandlkalkwalawk][2]+' '+kelompok[alkwdnkalwndkandlkalkwalawk][3]);
    console.log('Hobi apa bro :'+kelompok[alkwdnkalwndkandlkalkwalawk][4]);
    console.log('');
  }
  
  return okecuy;
  
  }
  
  console.log(Coba([
          ["01", "Alamsyah", "Jogja", "21/09/1990", "Makan"],
          ["02", "jerry", "jerman", "30/02/1999", "Mobile"],
          ["03", "ruben", "jakarta", "21/07/1991", "berenang"],
          ["04", "tuyul", "kuburan", "21/101890", "Maling"],
  
  ]));