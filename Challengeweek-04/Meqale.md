#                            "Javascript ən çox soruşulan suallar və cavabları"

## Sual-1 : == ve === operatorları arasındakı fərq nədir?

#### Cavab :Bildiyiniz kimi hər 2 operatorda berabərlikləri yoxluyur. bu operatorlar arasindakı əsas fərq ondan ibarətdirki (==) operatoru sadəcə dəyərlər arasında muqayisə aparır Lakin (===) operatoru isə həm dəyərlər həmdəki data tipləri arasında muqayisə apararaq nəticə verir.
```
5 == "5" //True
5 === "5" //False
```
#### Burdanda gorunduyu kimi (==) sadəcə dəyərlər arasında müqayisə apardıqı üçün nəticı True qayıdır. (===) isə dəyərdən əlavə olaraq onun data tipinə görədə müqayisə aparır və ilk 5-number digər 5-string olduğu üçün nəticə False qayıdır. 
#### Bundan əlavə Javascriptdə 6 ədəd falsy dəyəri vardır. | 1.False | 2."" | 3.0 | 4.NaN | 5.Null | 6.Undifiend |.  False,0,""-bu 3ü arasında == operatoru ilə qarşılaşdırma etdikdə nəticə True çıxır. Null və Undifiend sadəcə özlərinə  və bir birlərinə bərabərdir. NaN isə özü daxil heç nəyə bərabər deyildir.
```
False == 0 //True;
0 == "" //True;
"" == False //True;

Null == Undifiend //True
Null == Null //True
Undifiend == Undifiend //True

NaN == ... //False
```
--------------------------------------------------------------------------------------------------------------

## Sual-2 : first class function nədir?

#### Cavab :Əgər funksiya proqramlaşdırma dilində dəyişən kimi istifadə oluna bilirsə, o, first class function adlanır.Belə funksiyaların əsas özəllikləri bunlardan ibarətdir.                                         funksiyaları bir dəyişkənə ötürmək olur Məsələn:
```
const sum= function(a,b) {return a+b};
sum(455+211);
```
#### və ya bir funksiya başqa bir funksiya daxilinde return olmalıdır:
```
function Salamde() {
   return function() {
      console.log("Salam!");
   }
}
```
#### bu funksiyanı cağırmaqın 2 yolu var 1cisi variable istifadə edərək:
```
const Salamde = function() {
    return function() {
        console.log(Salamlar!)
    }
}
const myFunc = Salamde()
myFunc()

```
#### 2ci yol isə 2cüt mötərizə istifadə edərək:
```
// function Salamde() {
//     return function() {
//        console.log("Salam!");
//     }
//  }
//  Salamde()();
//  // Salam!
```
--------------------------------------------------------------------------------------------------------------
## Sual-3 : ES6 dakı classlar nelerdir?

#### Cavab: ES6dan öncə Javascript ilə OOP-yəni obyekt yönümlü proqramlama etmək əziyətli və çətin idi. Çünki yaddaşı yaxşı şəkildə istifadə edə bilməmək kimi bir neçə sadə problemləri var idi.ES6 ilə gələn class məntiqi sayəsində bu problemlər geridə qaldı.                                                                           ES6-dan öncə obyektlər aşağıdakı kimi tanımlanırdı:
```
var Car = function(nomre,model,reng){
    this.nomre = 666;
    this.move(model,reng);
};
Car.prototype.move = function(model,reng){
    this.model = 'BMW';
    this.reng = 'Qara';
};
```
#### Burda Yaddaşın verimli istifadəsi üçün Prototype metodundan istifadə edərək bir obyekt classı yaratmağa çalışırdıq və indi ES6 vasitəsi ilə belə istifadə edə bilirik:
```
class Car {
    constructor(nomre,model,reng) {
        this.id = nomre
        this.move = (model,reng)
    }
    move (model,reng){
        this.model = 'BMW'
        this.reng = 'Qara'
    }
}
```
#### digər numunəyə baxdıqda görürük ki class məntiqi daha oxunaqlı və başa düşüləndir.
--------------------------------------------------------------------------------------------------------------
## Sual-4 :  Cookie nədir? (37)
#### Cavab : Cookie ölçüsü 4kb keçməyən metin(txt) istifadəci ilə web brovser arasinda olan balaca çərəzlərdi yəni parolun yaddasda saxlanması, brovserde neyinse xatırladılması, alış veriş saytlarında sebet mentiqi, ve s xirda informasiyalari istifadeciye oturmek ucun isledilir.Bundan elave olaraq Cookie guvenlik cehetden zeif oldugu ucun ve pis niyyetli insanlar terefinden ogurlanmasin diye daxilinde vacib ve hessas melumatlar saxlanilmamalidir.  Cookie nece yaradilir:
```
document.cookie = 'Name=Mehemmed';
```
--------------------------------------------------------------------------------------------------------------
## Sual-5 : Cookie ozellikleri nelerdir? (39)
#### Cookie eger vaxt teyin etmeseniz sehife acildiqda yaranacaq ve baglandiqda itecekdir.Cookielere vaxt teyin etmey ucun 2 seceney var "express" ve "max-age" express her hansisa bir tarixe teyin edib o vaxta kimi aciq saxlanmasi ucun istifade olunur. max-age ise verilen vaxti saniye formasinda yazaraq istifade edile bilir :
```
document.cookie = "name=Muhammed; express=Sun, 29 Nov 2021 10:00:00 UTC;"
document.cookie = "name=Muhammed; max-age="+60*60*24*3"; //3 gun
```
#### cookie yarandiqda Ana sehife ve daxilindeki butun sehfelerde ortaya cixir Lakin ozel olaraq sehifenin bir bolumune sabitleseniz cookie sadece o bolme ve onun alt sehifelerinde cixacaqdir. bunun ucun path metodundan istifade etmek lazimdir:
```
document.cookie = "name = Muhammed; path=/;
```
--------------------------------------------------------------------------------------------------------------
## Sual-6 : web storage nedir? (35)
#### Cavab : web storage browserde melumatlari depolamaq ucun istifade olunur HTML5 e qeder bu fealiyyet cookie vasitesi ile heyata kecirilirdi. yaddasin olcusu browsere gore deyisir lakin en az olcude destekleyen browser 5MB olcudedir.Web storage 2 depolama novu var. "Local storage" ve "Session Storage". Local storage-istifadeci datani silene qeder qalir eger datani silmezse 1 ay ve ya 1 il sonra bele onu tapa biler.NOT-local storage datalari string olaraq qeyd edir. istifadeye uygun olaraq deyisdirmeyi unutmayin ! Session storage-sehife istifadeci terefinden baglandiqda avtomatik olaraq silinir.bu 2 depolama novunun istifadesi eynidir.
--------------------------------------------------------------------------------------------------------------
## Sual-7 : web storage browserle uygundurmu? (47)
#### Cavab : Web storage istade etmeden once browseriniz terefinden desteylendiyini yoxlamaq ucun asaqidaki koddan istifade etmelisiniz:
```
if (typeof (Storage) !== "undefined") {
  // localStorage ve sessionStorage 
} else {
  alert("browseriniz Web storage desteklemir!.");
}
```
--------------------------------------------------------------------------------------------------------------
## Sual-8 : callback function nedir? (54)
#### Cavab : Javascriptde sinxron ve assinxron isleme novu vardir. biz 2 funksiya yazdiqda ve bu funksiyalari call etdikde ardicil olaraq 2sininde neticesi cixir ve bu sinxron ozellikdir. eger burda funksiyalardan 1i daha gec fealiyete kecerse 0.5 saniye bele gecikerse, netice daha tez hell olandan gec hell olana dogru irelileyecek. bu ise assinxron ozellikdir.Numune :
```
function num() {
     console.log('1')
}
function num2() {
    console.log('2')
}
num()
num2()
//1
//2

function num() {
    setTimeout(function(){
        alert('1')
    }, 500);
};
function num2() {
    alert('2');
};
num();
num2();
//2
//1
```
#### gorduyunuz kimi 1ci funksiyada gecikme oldugu ucun 2ci netice olaraq cixdi. bunun qarsini almaq ucun ilk cixmasini istediyim funksiyada callback edirik:
```
function num(callback) {
     setTimeout(
    function () {
         alert(1);
         callback()
     }, 500);
 };
 function num2() {
    alert(2);
 };
 num(num2);

```
--------------------------------------------------------------------------------------------------------------
## Sual-9 : typeof operatoru nədir?
#### Cavab : typeof operatoru verilenin tipini teyin etmek ucun istifade olunur. 7 tip vardir: number,boolean,string,function,symbol,undifiend,object. kodlarla izah etmeli olarsaq :
```
let num = 5 
console.log(typeof(num))
//number

let str = 'bu meqale 90+ almalidir :)';
console.log(typeof(str));
//string

let b = true
console.log(typeof(b));
//boolean

var fun = function() {
    console.log('men functionam');
};
typeof fun //function

var a
typeof a
//undifiend

typeof {num : 1};//obejct
typeof [1,2,3];//ojcect
typeof new Date();//object
```
--------------------------------------------------------------------------------------------------------------
## Sual-10 : Null dəyəri nədir? (73)
#### Cavab : Null bir dəyər deyildir. Null 0da deyil çünki 0 özü belə bir dəyər daşıyır. programlamada hec bir dəyəri olmayana null və ya null string deyilir. əgər bir variable yaradib onu boş buraxsaniz o belə bir boş dəyər daşımış sayılır. ona Null verilməlidiki boş olduğu təsdiqlənsin.
```
var a = null
console.log(a)
//Null-yəni boş yoxluqdur.
```
--------------------------------------------------------------------------------------------------------------
## Sual-11 : Eventlər nələrdir? 
#### Cavab : HTMLdə olan hadisələrə eventlər deyilir 3 növ event var Web sehifenin yuklenmesi ile olan hadiseler, butona click olunmasi ile yaranan hadiseler ve .. bu yaranan Html hadiseleri neticesinde neyinse bas vermesini teleb edir ve javascript bu hadiseler zamani teleb olunan  isleri heyata kecirdir. meselen bir numune ile Htmlde butona click etmek ucun onclick kodunu yazaq :
```
<button onclick="alert(Date());">Buraya tıkla</button>
```
#### Html eventsler esasen javascript functionlarini ise salmaq ucun istifade olunur :
```
<script>
  function Hesabla(reqem1,reqem2){
      alert(reqem1 + reqem2)
  }
</script>
<button onclick="Hesabla(55, 11);">Buraya tıkla</button>
```
#### Burada gorunduyu kimi Htmlde click etmekle javascriptle elaqelendirdik ve function ise dusdu.
--------------------------------------------------------------------------------------------------------------
## Sual-12 : Javascript nie yarandi? (101) -246
#### Cavab :1995ci ilin may ayinda Mocha, Netscape communicatorun novbeti versiyasina elave edildi ve bir muddet livescript adlandi. bu muddet 1995ci ilin dekabr ayina qeder davam etdi ve bundan sonra Javascript adi ile tanindi.Bele ki Javascript kicik client-side tapsiriqlari yerine yetirmek ucun istifade oluan skriptlesme dili oldugu halda, Java ise daha boyuk komponent tapsiriqlari heyata kecirmek ucun istifade olunacaqdi.
--------------------------------------------------------------------------------------------------------------
## Sual-13 : URL nece kodlanir? (210)
#### Cavab : javascript ile birlikte gelen “encodeURI()” ve “encodeURIComponent()” funksiyalari linkleri url halina kecirtmey ucun istifade olunur bir birlerinden ferqi ondadirki encodeURI daxilinde  “$ – _ . + ! * ‘ ( ) , ~ # ; / ? : @ & =” olan linkleri kodlamir. encodeURIComponent() ise sadece  “- _ . ! * ‘ ( ) ~” bunlari kodlamir yeni daha qarisiq bi linki kodlamaq istesek encodeURIComponent() den istifade etmeliyik. Numune :
```
var url = "http://www.95balistiyirem.com/sizeguveniremyazarsiz";
var encodedURL = encodeURI(url);
 
console.log(encodedURL);


//encodeURIComponent

var url = "http://www.yazilimcity.net/kodlanmamış";
var encodedComponentURL = encodeURIComponent(url);
 
console.log(encodedComponentURL);
```
--------------------------------------------------------------------------------------------------------------
## Sual-14 : Weakmap nedir? (206)
#### Map ES6 ile birlikte gelen bir collectiondur. Mapin esas yaranma sebebi obyektlerde deyerlerin hamisi string olurdu Lakin Mapda istediyiniz tipde deyer yarada bilirsiz.Meselen : 
```
let map = new Map();

map.set('1', 'str1');   // String tip
map.set(1, 'num1');     // number tip
map.set(true, 'bool1'); // boolean tip
```
#### Mapin esas ana funskiyalari bunlardan ibaretdir :
```
new Map() – yeni map yaratmaq ucun
map.set(key, value) – key lere deyer elave etmek ucun
map.get(key) – keyin deyerin qaytarir. eger hec bir deyer verilmiyibse undifiend olaraq qayidir.
map.has(key) – bu funskiyada keyin deyerin lakin boolean olaraq. eger deyer varsa true yoxdursa false olur.
map.delete(key) – key in deyerin silmey ucun istifade olunur.   
map.clear() – Mapin daxilin temizlemek ucun isledilir.
map.size – daxilinde olan umumi deyer sayin qaytarir.
```
--------------------------------------------------------------------------------------------------------------
## Sual-15 : Switchcase ne ucun istifade olunur? (221)
#### Cavab : Switch case-ler muqayise etmek ucun istifade olunur esasen. case lerde verilenleri switchde teleb olunan deyerle qarsilasdiraraq yoxlayir hansi uygun gelirse netice olaraq verir. en sona default deyer veririk buda eger hec bir case switchle uygun gelmezse netice olaraq cixir.Numune ile baxaq :
```
switch(info) {
  case a:
    // a kodlar
  break;
  case b:
    // b kodlar
  break;
  default:
    // switchler biterse gelecek kod.
}
```
#### Break ise case uygun gelerse funskiyani sonlandirsin diye istifade olunur.Switchcaselere ornek olaraq heftenin necenci gunu olduqunu yoxluya bilerik.(NOT-getday funksiyasi heftenin gununu 0 ile 6 arasinda verir) :
```
var tarix = new Date();
var gun = tarix.getDay();
var elave = 'bu gun gunlerden'
switch(gun) {
  case 0:
    alert(" bu gun gunlerden bazar");
  break;
  case 1:
    alert("bu gun gunlerden bazar ertəsi");
  break;
  case 2:
    alert("bu gun gunlerden çərşənbə");
  break;
  case 3:
    alert("bu gun gunlerden çərşənbə axşamı");
  break;
  case 4:
    alert("bu gun gunlerden cümə");
  break;
  case 5:
    alert("bu gun gunlerden cümə axşamı");
  break;
  case 6:
    alert("bu gun gunlerden şənbə");
};
```
--------------------------------------------------------------------------------------------------------------
## Sual-16 : Pirimitive data tipleri hansilardir? (223)
#### Cavab : data tipleri deyerleri saxlamaq ucun istifade olunan muhum terimlerdi. umumiyyetle 2 cur data tipi vardir pirimitive ve reference data tipleri. pirimitiv data tipleri daha sade data tipleridi bunlar number,boolean,string,undifiend ve null dur. reference data tipleri ise function,object,array tipleridir.NOT-deyerin hansi data tipini dasidigini bilmek ucun typeof operatorundan istifade etmek mumkundur.
--------------------------------------------------------------------------------------------------------------
## Sual-17 : arrayin reverse methodu ne ucundur nece istifade edilir?
#### Cavab : Reverse methodu deyerleri tersinden yazdirmaq ucun istifade olunur.:
```
var meyve = ['Alma','Bal90dancox','Heyva','Nar','Kivi'];

function ters() {
    meyve.sort();
    meyve.reverse();
    alert(meyve);
};
ters();
```
--------------------------------------------------------------------------------------------------------------
## Sual-17 : Comma operator-vergul operatoru nedir?
#### Cavab : Vergul operatoru soldan saga verilenlerin deyerini qaytarmaq  ve onlari bir birinden ayirmaq ucun istifade olunur. Meselen artan bir reqem yazaq :
```
var x = 1
x = (x++,x)
console.log(x)
// 2
```
#### burdada gorunduyu kimi  solda olan ilk x++  oldugu ucun x-in deyeri deyiserek 2 oldu ve consolada 2 ni oturdu.
--------------------------------------------------------------------------------------------------------------
## Sual-18 : getTimezoneOffset ne ucundur?
#### Cavab : bu method beynelxalq saatla sizin zonanin saat ferqini deqiqe ile gostermek ucun istifade olunur.
```
var offset = new Date().getTimezoneOffset();
console.log(offset); 
```
--------------------------------------------------------------------------------------------------------------
## Sual-19 : Jquery nedir? (296)
#### Cavab : Jquery bir Javascript kitabxanasidir. 2006ci ilde John resing terefinden developerlerin Javascript istifadesini daha rahat sekile getirmey ucun yaratmisdir. ayri bir program dili deyil Javascript ile birlikde isleyir. xuxusi ile bir cox string oldugda kod yazmaq yorucu ola bilir. bunun ucun Jquery coxlu kod setirlerini bir nece kod setrine cevirmek ucun istifade olunur. 
--------------------------------------------------------------------------------------------------------------
## Sual-20 : ES6 nedir? (305)
#### Cavab : ECMAscript6 2015ci ilde yaranmisdir ve Javascript dili ucun yeni nesil bir standartdir.ECMA international terefinden ECMA-262 ve ISO/IEC 16262 standartlariyla standartlasdirilib.ES6 ile heyatimiza const ve let anlayisi daxil olur.
--------------------------------------------------------------------------------------------------------------
## Sual-21 : Pure function nədir?
#### Cavab : Pure function-un özəlliyi odurki, verilən dəyər əldə edilən dəyərlə eyni olur:
```
const Pure = (input)=>{
        let output = input
        return output
}

console.log(Pure(8))
```
--------------------------------------------------------------------------------------------------------------
## Sual-22 :  bir object in daxilindekileri list halina nece getirmek olar?
#### Cavab : indi istifade edeceyimiz method objectin daxilindekileri cixaradaq bir array daxiline yigir, bu Object.getOwnPropertyNames() methodudur. Numune ile gostermeli olarsaq :
```
const newObject = {
  ad:Mehemmed;
  Soyad:Bayramzade;
  Bal: 95+
};

console.log(Object.getOwnPropertyNames(newObject));  ["ad", "Soyad", "Bal"]
```
--------------------------------------------------------------------------------------------------------------
## Sual-23 : Enum nedir? (279)
#### Cavab : Enum bir data novudur. Enum ile bir olculer yaradaq ve numune uzerinden isliyek :
```
Enum olculer{
  Small,
  Medium,
  Large
}
```
#### gorduyunuz kimi object literal formatinde bir obyekt yarandi. biz buna basqa olcu elave etdikde error aliriq bunun sebebi indexlerle elaqelidi. ona en son indexi verdiyimiz zaman bu problem aradan qalxacaq :
```
enum olculer{
  xlarge = 3
}
```
#### Javascriptde nomrelendirme yoxdur lakin bu data novu nomrelendirme etmek ucun size komek ede biler.
--------------------------------------------------------------------------------------------------------------
## Sual-24 : Constructor method nedir?
#### Cavab : obyekt yonumlu programlamada OOP yanasmasinda bir obyektin yaranmasi zamani ilk isliyen funksiyaya deyilen ad Construcotr metodudur.yeni bir obyektin yaranmasi RAM da onun butun variable ve funksiyalarinin kopyasinin ora yerlesmesi demekdir.bir sozle obyektin yaratdigi funskiyaya catmaq ucun istifade olunan ozelliye constructor method deyilir.
--------------------------------------------------------------------------------------------------------------
## Sual-25 : Consolda obyektleri nece tablo formasinda goruntuleye bilerik?
#### Cavab : bunun ucun bizim console.table methodumuz var ve bu metodla consola oturduyumuz obyektin goruntusu daha seliqeli olan table formasinda gorsenecek. Numune :
```
const users = 
[{'ad':'Mehemmed','Bal': 95, 'seher':'Baku'},
{'ad':'Vusal','Bal':78, 'seher':'Gence'},
{'ad':'Rovshen','Bal': 92, 'seher':'Celilabad'} ];
console.table(users);
```
--------------------------------------------------------------------------------------------------------------
## Sual-26 : map methodunu istifade etmeden bir obyektin deyerlerini nece array e kocurmek olar?
#### : arraye kocurmek ucun bize lazim olan method from methodudur.Numune :
```
const seher = [
  {ad : 'Fransa',paytaxt : 'Paris'},
  {ad : 'Azerbaycan',paytaxt : 'Baki'},
  {ad : 'Turkiye',paytaxt : 'Ankara'},
  {ad : 'Ingiltere',paytaxt : 'London'},
];

const citynames = Array.from(seher,({paytaxt}) => paytaxt);
console.log(citynames);
```
#### gorduyunuz kimi Array.from yazaraq obyektden istediymiz deyerleri aldiq ve consolda gosterdik.
--------------------------------------------------------------------------------------------------------------
## Sual-27 :strict mode nədir?
#### Cavab : Strict mode ES6-la birlikdə əlavə olunmuşdur.Strict mode-dan istifadə etmək üçün ilk sətirə ‘use strict’ yazmaq kifayətdir.Biz strict mode-dan istifadə etdikdə daha konkret kod yazmalı oluruq.Hansı ki normal bir kodu yazdıqda error vermədiyi təqdirdə strict moddan istifadə etdikdə errorla qarşılaşırıq.
--------------------------------------------------------------------------------------------------------------
## Sual-28 : 2 ve daha artiq arrayi nece birlesdirmek olar? (344)
#### Cavab : contact() methodu ile 2 ve daha artiq arraylari bir yere yigmaq mumkundur.Numune :
```
var tek = [1,3,5,7,9,]
var cut = [2,4,6,8,10]
var ededler = tek.concat(cut)
ededler.sort(function(a,b){
  return a-b
})

console.log(ededler)
```
--------------------------------------------------------------------------------------------------------------
## Sual-29 : daxili ve xarici javascript haqqinda
#### Cavab : daxili javascript web sehife daxilinde html kodlarinin arasina yerlesdirilerek istifade olunur ve daxili javascripitin esas avantajlarindan biri budur ki qisa kodlardan istifade etdiyimiz zaman daxili javascriptde yazarsaq web sehife daha tez yuklenecek.xarici javascript ise htmlden ayri olaraq ayri bir fayl daxilinde javascriptin yazilmasidir. daxili javascript ile eyni formada yazilir. ve faylin sonuna .js sonlugu yazilmalidir.xarici javascriptin esas avantaji ise boyuk kod parcasi yazildiqda basqa web sehifedede istifade etmek ucun htmle qosula biler.
--------------------------------------------------------------------------------------------------------------
## Sual-30 : consta sonradan deyer vermek mumkundurmu?
#### Cavab : beli const variable deyeri deyismez etmir. yeni deyerini sonradan push ederek deyisdirmek mumkundur. Numune :
```
const ad = [];
ad.push('Mehemmed');
console.log(ad)
```
--------------------------------------------------------------------------------------------------------------
## Sual-31 : minifaction nedir?
#### Cavab : web sehifenizin html,css,javascript senedlerini sixisdirmaq ucun istifade olunan programa deyilir. bu sixistirma esasen kod bloklarindaki lazimsiz qisimleri cixartmaqla olur. lazimsiz qisim dedikde ise-bosluqlar,setir sonlari,commentler,block ayiricilar ve s.
--------------------------------------------------------------------------------------------------------------
## Sual-32 : Freeze methodu nedir? (178)
#### Cavab :  Freeze methodu her hansisa bir obyekte deyer verdikden sonra ona sonradan xaricden deyer atamaq istesek bu mumkun olmuyacaq consola verdikde ilk verdiyimiz deyer sabit qalacaq bir nov dondurulmus halda deyismeyecek. Numune :
```
const obj = {
  bal : 95
};
Object.freeze(obj)

obj.a = 70;
console.log(obj)

// 95
```
--------------------------------------------------------------------------------------------------------------
## Sual-33 :Arrayin ilk herfini boyuk etmek olar? (129)
#### Cavab : bunun ucun ilk once cumlenin 1ci herfini secirik sonra toUppercase methodunnan istifade olunur cumlenin ilk herfini boyuk olaraq yazdiririq ve sonra cumlenin ilk herifi ile yerini deyisirik. numune olaraq :
```
function ilkHerifBoyuk(string) {
    return string[0].toUpperCase() + string.slice(1);
}

console.log(ilkHerifBoyuk('pragmatech'))
//Pragmatech
``` 
--------------------------------------------------------------------------------------------------------------
## Sual-34 : stringin ilk deyerini yoxlamaq ucun hansi methoddan istifade olunur?
#### Cavab : ES6 ile birlikte gelen startsWith() methodu ile bir deyeri bu methodun daxiline yazaraq stringin ilk deyeri olub olmadiqini yoxluya bilirik. butun browserler desteklemesede istifade qaydasi beledir :
```
let string = "Pragmatech education"
console.log(string.startsWith("Pragmatech"));//true
console.log(string.startsWith("education"));//false
```
--------------------------------------------------------------------------------------------------------------
## Sual-35 :   Javascript və Typescript arasındakı fərqlər nələrdir? 
#### Cavab : Dinamik veb səhifələr hazırlanır. Səhvlər yalnız kod işləyərkən tapıla bilir. Birbaşa brauzerlərdə istifadə edilə bilər. JS kitabxanaları standart olaraq işləyir. Modullar, generiklər və ya interfeys üçün dəstək yoxdur. TYPESCRIPT: Böyük layihələr üçün kod mürəkkəbliyini aradan qaldırır. Səhvlər kod işləyən zamanı tapıla və düzəldilə bilər Güclü şəkildə yazılmışdır, həm statik, həm də dinamik yazmağı dəstəkləyir Brauzerlər üçün başa düşülən olması üçün JavaScript koduna çevrilir.
--------------------------------------------------------------------------------------------------------------
## Sual-36 :bir arrayin tekrar olunmayan deyerlerini nece secmek olar?
#### Cavab : set methodu istifade ederek bir arrayin daxilinde her deyerden 1 eded olaraq neticeye cixara bilersiz. Numune :
```
console.log([...new Set([565, 385, 478, 431, 385, 565, 431])]); // [565, 385, 478, 431]
```
--------------------------------------------------------------------------------------------------------------
## Sual-37 : Javascript isNan nedir?
#### Cavab :  bəzən kod yazdığımız zaman Nan erroru ilə qarşılaşırıq.Nan-dan qısaca danışası olsaq Nan-ın mənası reqem deyil mənasındadır.Bu bir error növüdür.Ancaq bu məqalədə danışacağımız məsələ isNan metodudur. isNan metodunun mənası isə bir növ daxil edilən parametr və ya dəyər mənasındadır.Yəni aldığı dəyəri rəqəm olub olmadığını təyin edir.Düzü o qədər də istifadə olunmur ancaq bilmək faydalıdır.Qısa bir kodla bunu göstərim.
--------------------------------------------------------------------------------------------------------------
## Sual-38 : typeof operator
#### cavab : typeof operatoru verilenin tipini teyin etmek ucun istifade olunur. 7 tip vardir: number,boolean,string,function,symbol,undifiend,object. kodlarla izah etmeli olarsaq :
```
let num = 5 
console.log(typeof(num))
//number

let str = 'bu meqale 90+ almalidir :)';
console.log(typeof(str));
//string

let b = true
console.log(typeof(b));
//boolean

var fun = function() {
    console.log('men functionam');
};
typeof fun //function
```
--------------------------------------------------------------------------------------------------------------
## Sual-39 : Sintaksis error nədir? 
#### Cavab : Javascriptdə kod yazarkən ya kod isləmir ya error verir.herseyin yolunda oldugunu fikirlesdiyimiz zaman .Birden erroru görürük sintaksisdən olduğunu bilirik. Javascriptdə kodlar müəyyən qaydaya uygun yazılmışdır.Məsələn array içərisində vergullerden yalnız birini qoymasaq errorla qarşılaşa bilərik.Ya da funksiya yazarkən düzgün mötərizələrdən istifadə etməsək və.s kimi bir çox qaydaya uyğunsusluqlardan istifadə etməklə bu errorları görə bilərik.
--------------------------------------------------------------------------------------------------------------
## Sual-41 : console.table() ne ucun istifade olunur?
#### Cavab :  bu metodla consola oturduyumuz obyektin goruntusu daha seliqeli olan table formasinda gorsenecek. Numune :
```
const users = 
[{'ad':'Murad','Bal': 95, 'seher':'Baku'},
{'ad':'Vusal','Bal':78, 'seher':'Gence'},
{'ad':'Rovshen','Bal': 92, 'seher':'Celilabad'} ];
console.table(users);
```
--------------------------------------------------------------------------------------------------------------
## Sual-42 : stopproparation() nedir?
#### Cavab : stopPropagation() özəlliyi eyni event-in təkrarlanmasının qarşısını alır. adeten parent element ucun istifade olunur meselen her hansisa parent elemntin childide ozude alert verir ve 2si ust uste dusduyu ucun bu methoddan istifade edilerek biri stoplanir.
```
function func1(event) {
  alert("div1");
  
    event.stopPropagation();
  
}

function func2() {
  alert("div2");
}
```
--------------------------------------------------------------------------------------------------------------
## Sual-43 : Javascriptdə window-un ölçüsünü necə öyrənmək olar?
#### Cavab : innerWidth metodu ilə. Yazılışı:
```
var x = window.innerWidth
console.log(x)
```
--------------------------------------------------------------------------------------------------------------
## Sual-44 : Javascriptdə Anonymous Function nədir?
#### Cavab :Adı olmayan function-a anonymous function deyilir. Hansısa variable-a dəyər olaraq verilir.Və ada ehtiyac olmadan variable adı ilə çağırılır.
--------------------------------------------------------------------------------------------------------------
## Sual-45 :  Html elementlərini javascriptdə necə tapmaq olar?
#### Cavab : Bunu 4 yolla etmək mümkündür:
```
— document.querySelector(“”)
— document.getElementById(“”)
— document.getElementsByClassName(“”)
— document.getElementsByTagName(“”)
```
--------------------------------------------------------------------------------------------------------------
## Sual-46 : Javascriptdə onluq kəsri müəyyən bir onluğa gətirmək üçün hansı metoddan istifadə olunur?
#### Cavab :  Bunun üçün toFixed() metodundan istifadə olunur:
```
var x = 0.426534654
console.log(x.toFixed(2))

```
--------------------------------------------------------------------------------------------------------------
## Sual-47 : let ve const tekrar deyer verile bilermi? 
#### Cavab : const ile let tekrar deyer vermek mumkun deyil. bunu etdiyiniz zaman errorla qarsilasarsiniz. var keywordu ile yaradilan variable function scope ozelliyi dasiyir yeni bir funksiya daxilinde yaratdiqimiz var, funksiya xaricindede cagirila biler. Lakin let ile bir funksiya daxilinde variable yaratdiqimiz zaman bezeyli moterize xaricinde bu let variable ni yeniden cagira bilmerik, bunun sebebi ise Let-in block scope ozelliyidir.
--------------------------------------------------------------------------------------------------------------
## Sual-48 : IIFE function nədir?
#### Cavab :  acilisi:(Immediately Invoked Function Expression). Yəni, çağırılmağa ehtiyacı olmadan dərhal işə düşən funksiyadır.
--------------------------------------------------------------------------------------------------------------
## Sual-49 :jsde form nece sabit etmek olar ?
####  Cavab : bunun ucun submit metodunnan istifade olunur :
```
<!DOCTYPE html>
<html>
<body>
<form id="Form" action="">
  AD: <input type="text" name="fname"><br>
  Soyad: <input type="text" name="lname"><br><br>
  <input type="button" onclick="myfunction()" value="Submit form">
</form>

<script>
function myfunction() {
  document.getElementById("Form").submit();
}
</script>

</body>
</html>
```
--------------------------------------------------------------------------------------------------------------
## Sual-50 : bir obyektin deyerlerini nece arraya kecirmek olar?
#### : arraye kocurmek ucun bize lazim olan method from methodudur.Numune :
```
const seher = [
  {ad : 'Fransa',paytaxt : 'Paris'},
  {ad : 'Azerbaycan',paytaxt : 'Baki'},
  {ad : 'Turkiye',paytaxt : 'Ankara'},
  {ad : 'Ingiltere',paytaxt : 'London'},
];

const citynames = Array.from(seher,({paytaxt}) => paytaxt);
console.log(citynames);
```
#### gorduyunuz kimi Array.from yazaraq obyektden istediymiz deyerleri aldiq ve consolda gosterdik.

