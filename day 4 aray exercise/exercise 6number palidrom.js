function angkaPalindrome(num) {
    for (var i = 0; i < num; i++){
        num++
       
        var numString = String(num);
        var ok = numString.length;
        var string = '';
        for (var P = ok - 1; P >= 0; P--){
          string += numString[P];
         
        }
        if(numString === string){
          return num
        }
      }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001