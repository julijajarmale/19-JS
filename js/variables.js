/*
KINTAMIEJI

Iniciavimo budas:
const - inicijavimo budas, kurio negalima keisti
let -antrinis budas inicijuoti, kai zinome, jog reiksme tures keistis;
var - pats seniausias ir geriau niekada nenaudoti jei rupi saugumas.

Duomenu tipas: 
- number (skaicius)
- string (tekstas)
- boolean (logine reiksme: ture|false)
- array (masyvas, sarasas, matrica)
*/

const luckyNumber = 7;
console.log('Lucky number', luckyNumber);

let pinigine = 0;
console.log('pinigine', pinigine);

pinigine = 5;
console.log('pinigine', pinigine);

const vardas = 'Maryte';
const pasisveikinimas = 'Laba diena, ' + vardas + '.'
console.log(pasisveikinimas);

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;
console.log('Ar vedes?', arVedes);
console.log('Ar turi vaiku?', arTuriVaiku);
console.log('Ar meluoja?', arMeluojaDelVaiku);

console.log(1, 2, 3, 4);

console.log(2 + 2 * 2);
console.log('2 + 2 * 2');

console.log(true, false);
console.log('true', 'false');

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai', pazymiai);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

const booleanList = [true, false, true, false, true, false];
console.log(booleanList);

const random = [1, 'a', true, []];
console.log(random);