/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'arief', output: 'Masuk group pertama'
- `name` = 'rinnina', output: 'Masuk group kedua'
- `name` = 'joshua', output: 'Masuk group terakhir'
- `name` = 'yusril', output: 'Masuk group terakhir'

*/

var name = 'abi';

if (name [0] == 'a' || name [0] == 'b' || name [0] == 'c' || name [0] == 'd'){
  console.log('Kamu ada di group pertama');
} else if (name [0] == 'f' || name [0] == 'g' || name [0] == 'h' || name [0] == 'i'){
 console.log('kamu ada di group ke dua');
} else {
  console.log ('kamu ada di group terakhir');
}
var name = 'ilham';

if (name [0] == 'a' || name [0] == 'b' || name [0] == 'c' || name [0] == 'd'){
  console.log('Kamu ada di group pertama');
} else if (name [0] == 'f' || name [0] == 'g' || name [0] == 'h' || name [0] == 'i'){
 console.log('kamu ada di group ke dua');
} else {
  console.log ('kamu ada di group terakhir');
}
var name = 'Zero';

if (name [0] == 'a' || name [0] == 'b' || name [0] == 'c' || name [0] == 'd'){
  console.log('Kamu ada di group pertama');
} else if (name [0] == 'f' || name [0] == 'g' || name [0] == 'h' || name [0] == 'i'){
 console.log('kamu ada di group ke dua');
} else {
  console.log ('kamu ada di group terakhir');
}

// Code disini

