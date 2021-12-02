// function Salamde() {
//     return function() {
//        console.log("Salam!");
//     }
//  }
//  Salamde()();
//  // Salam!



//  const Salamde = function() {
//     return function() {
//         console.log('Salamlar!')
//     }
// }
// const myFunc = Salamde()
// myFunc()

// var Car = function(id,model,reng){
//     this.id = 1;
//     this.move(model,reng);
// };
// Car.prototype.move = function(model,reng){
//     this.model = 'BMW';
//     this.reng = 'Qara';
// };

// console.log(Car)


// class Car {
//     constructor(id,model,reng) {
//         this.id = id
//         this.move = (model,reng)
//     }
//     move (model,reng){
//         this.model = 'BMW'
//         this.reng = 'Qara'
//     }
// }





// function Bike(model,color) {
//     this.model = model;
//     this.color = color;
// }

// Bike.prototype.getDetails = function() {
//     return this.model + ' bike has' + this.color + ' color';
// };




// class Bike{
//     constructor(color, model) {
//       this.color= color;
//       this.model= model;
//     }
  
//     getDetails() {
//       return this.model + ' bike has' + this.color + ' color';
//     }
//   }
// document.cookie = "name=Muhammed; path=/";


//  function num(callback) {
//      setTimeout(
//     function () {
//          alert(1);
//          callback()
//      }, 500);
//  };
//  function num2() {
//     alert(2);
//  };
//  num(num2);

// function first(callback) {
//     setTimeout(
//         function () { 
//               alert(1);
//               callback() 
//         }, 500); 
//   } 
  
//   function second() { 
//       alert(2); 
//   } 
  
//   first(second); 
  
// let num = 5 
// console.log(typeof(num))

// var a = null
// console.log(a)

// var url = "http://www.yazilimcity.net/kodlanmamış";
// var encodedURL = encodeURI(url);
 
// console.log(encodedURL);


// var tarix = new Date();
// var gun = tarix.getDay();
// var elave = 'bu gun gunlerden'
// switch(gun) {
//   case 0:
//     alert(" bu gun gunlerden bazar");
//   break;
//   case 1:
//     alert("bu gun gunlerden bazar ertəsi");
//   break;
//   case 2:
//     alert("bu gun gunlerdençərşənbə");
//   break;
//   case 3:
//     alert("bu gun gunlerdençərşənbə axşamı");
//   break;
//   case 4:
//     alert("bu gun gunlerden cümə");
//   break;
//   case 5:
//     alert("bu gun gunlerden cümə axşamı");
//   break;
//   case 6:
//     alert("bu gun gunlerden şənbə");
//   default :
//     alert("bu gun bazar gunu deyil");
// };


// var meyve = ['Alma','Bal90dancox','Heyva','Nar','Kivi'];

// function ters() {
//     meyve.sort();
//     meyve.reverse();
//     alert(meyve);
// };
// ters();

// var offset = new Date().getTimezoneOffset();
// alert(offset); 

// const newObject = {
//     ad: 'Mehemmed',
//     soyad: 'Bayramzade',
//     bal: 95
//   };
  
//   console.log(Object.getOwnPropertyNames(newObject)); 

// const users = [{'ad':'Mehemmed','Bal': 95, 'seher':'Baku'},{'ad':'Vusal','Bal':78, 'seher':'Gence'},{'ad':'Rovshen','Bal': 92, 'seher':'Celilabad'} ];
// console.table(users);


// const seher = [
//   {ad : 'Fransa',paytaxt : 'Paris'},
//   {ad : 'Azerbaycan',paytaxt : 'Baki'},
//   {ad : 'Turkiye',paytaxt : 'Ankara'},
//   {ad : 'Ingiltere',paytaxt : 'London'},
// ];

// const citynames = Array.from(seher,({paytaxt}) => paytaxt);
// console.log(citynames);


// console.log([...new Set([1, 2, 4, 4, 3])]);


// var tek = [1,3,5,7,9,]
// var cut = [2,4,6,8,10]
// var ededler = tek.concat(cut)
// ededler.sort(function(a,b){
//   return a-b
// })

// console.log(ededler)

// const ad = [];
// ad.push('Mehemmed');
// alert(ad)


// const obj = {
//   a : 4
// };
// Object.freeze(obj)

// obj.a = 6;
// console.log(obj)

// const ad = [];
// ad.push('Mehemmed');
// console.log(ad)


// function ilkHerifBoyuk(string) {
//     return string[0].toUpperCase() + string.slice(1);
// }

// console.log(ilkHerifBoyuk('pragmatech'))
// let string = "Pragmatech education"
// console.log(string.startsWith("Pragmatech"));//true
// console.log(string.startsWith("education"));//false