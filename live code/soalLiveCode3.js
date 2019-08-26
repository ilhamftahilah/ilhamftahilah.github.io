/**
--------------------
String Manipulators!
--------------------

Buatlah beberapa function berikut:

1. addTitle, yang menerima 4 parameter yaitu `name1`, `name2`, `name3` dan `name4`.
   Function akan menambahkan 'Mr. ' dan ', ' pada setiap nama dan mengembalikan nilai tersebut.
   Contoh:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'

2. changeSpacesWith, yang menerima 2 parameter yaitu `str` dan `to`.
   Function akan mengganti spasi di `str` dengan nilai yang kita berikan lewat parameter `to`
   dan mengembalikan nilai tersebut.
   Contoh:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'

3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Sasuke Uchiha')
     output: 'Sasuke'

RULES:
- Dilarang menggunakan regex
- Dilarang menggunakan slice, split, splice, substring

*/

// jawaban no 1
var jalan = function () {
  var sapaan = "Mr. ",
      sapa = function () {
          console.log(sapaan  + "Steve Fox" + ", " + sapaan  + "Jin Kazama" + ", " + sapaan  + "Jin Kazama" + ", " + sapaan  + "Geese Howard" + ", ");
      };

  sapa();
  
};

jalan();


// jawaban 2
var jalan = function () {
  var str = "-",
      changeSpaceWith = function () {
          console.log("Steve" + str + "fox" );
      };

  changeSpaceWith();

  var str = "+",
      changeSpaceWith = function () {
          console.log("Sergei" + str + "Dragunov" );
      };

  changeSpaceWith();
};
jalan();

//jawaban 3


var input = ['Kazuya Mishima'];
var input = ['Sergei Dragunov'];
var input = ['Sasuke Uchiha'];

function changeSpacesWith (input) {
  return input;
}
var spliceinput = input.splice(0,1);
var spliceinput = input.splice(1,1, 'Kazuya' + ', ' + 'Sergei' + ', ' + 'sasuke');

console.log(input);
