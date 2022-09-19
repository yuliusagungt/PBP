// Intro
// alert("Hello");
// var nama = "Yulius Agung";
// console.log(nama.charAt(5));

// var bil = Math.random();
// console.log(bil);

// function jumlah(a, b){
//     var total;
//     total = a+b;
//     return total;
// }
// alert(jumlah(5, 6));

//Function
// function volumeDuaKubus(a, b) {
//   var total, volumeA, volumeB;
//   volumeA = a * a * a;
//   volumeB = b * b * b;
//   total = volumeA + volumeB;
//   return total;
// }
// alert(volumeDuaKubus(100, 900));

//Parameter & Argument
// var c = parseInt(prompt('Masukan Nilai 1 : '));
// alert(volumeDuaKubus(c, c));
// function tambah(){
//     var hasil = 0;
//     for(var i =0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambah(1, 2, 9, 10);
// alert(coba);

//Refactoring
// function volumeDuaKubus(a, b) {
//   return (a * a * a) + ( b * b * b);
// }
// alert(volumeDuaKubus(5, 9));

//Rekursif
// function tampil(a){
//     if(a ==0) return;
//     console.log(a);
//     return tampil(a-1);
// }
// tampil(10);

// function faktorial(n){
//     if(n==0) return;
//     console.log(n);
//     return n * faktorial(n-1);
// }
// faktorial(5);

//Array
var nama = ['Aba', 'Abi', 'Abu', 'Abe', 'Abo'];
var angka = [1, 3, 5, 7, 9];
var arr1 = [nama, angka, 'teks'];
var arr2 = ['saya', false, nama, [4, 5, 6]];
console.log(arr2[3][1]);
