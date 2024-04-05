//! Task 1
//? Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm)verilir.
//? Pul bərabər hissələrə bölünərək hər ay verilməlidir.
//? Məs:1000 manat götürülür, 3 ayliq.
//? Ekrana yazdirilmalidir: 1-ci ay 333manat, 2-ci ay 333manat, 3-cu ay 334 manat;

// let kredit = parseFloat(prompt("Kredi migdari daxil edin:"));
// let ay = parseInt(prompt("Nece aylig istəyirsiniz?"));
// let aylig = kredit / ay;
// for (var i = 1; i <= ay; i++) {
//     if (i === ay) {
//         console.log(i + "-ci ay " + (kredit - (aylig * (i - 1))) + " manat;");
//     } else {
//         console.log(i + "-ci ay " + aylig + " manat;");
//     }
// }



//! Task 2
//? Reqemlerden ibaret arrayda duplicate reqemi qaytarin (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. Arrayde yalniz bir eded duplicate olacaq) : 
//? let myArr =  [1,3,4,2,2] // this is example. funksiya qaytarmalidir 2; Cunki 2 iki defe yazilib;
//? let myArr =  [1,3,4,4,]; funksiya qaytarmalidir 4; cunki 4 iki defe yazilib.

// function duplicat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return arr[i];
//             }
//         }
//     }
//     return null; 
// }
// let arr1 = [1, 3, 4, 2, 2];
// console.log(duplicat(arr1));
// let arr2 = [1, 3, 4, 4];
// console.log(duplicat(arr2)); 



//! Task 3
//? Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.

// function fahrenheitToCelsius(fahrenheit) {
//     let celsium = (fahrenheit - 32) * 5 / 9;
//     return celsium;
// }
// console.log(fahrenheitToCelsius(100));
