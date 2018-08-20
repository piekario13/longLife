var sekundyWMinucie = 60;
var minutyWGodzinie = 60;
var sekundyWGodzinie = sekundyWMinucie * minutyWGodzinie;
console.log(sekundyWGodzinie);

var godzinyWDobie = 24;
var sekundyWDobie = sekundyWGodzinie * godzinyWDobie;
console.log(sekundyWDobie);

var dniWRoku = 365;
var sekundyWRoku = sekundyWDobie * dniWRoku;
console.log(sekundyWRoku);


var wiek = prompt('Ile masz lat?');
var tyleMaszSekund = (wiek * sekundyWRoku);
alert("Żyjesz już " + tyleMaszSekund + " sekund");