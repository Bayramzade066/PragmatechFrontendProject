##                              "Javascript ən çox soruşulan suallar və cavabları"

### Sual-1 : == ve === operatorları arasındakı fərq nədir?

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