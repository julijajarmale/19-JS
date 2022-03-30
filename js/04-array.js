/*
ARRAY
-pozicijos prasideda nuliu;
-pozicijos tik sveikieji skaiciai;
-ilgis / irasu kiekis -> .length
 */

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai', pazymiai);

//koks pirmas
//koks paskutinis
//pazymiu kiekis
//pazymiu vidurkis

console.log('Pirmas:', pazymiai[0]);
console.log('Antras', pazymiai[1]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis -1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]);

//masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1,2] -> 2 -> 1
// [1,2,-6] -> 3 -> 2

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

let index = 0;
console.log(`Cia yra ${studentai[index++]}.`);
console.log(`Cia yra ${studentai[index++]}.`);
console.log(`Cia yra ${studentai[index++]}.`);
console.log(`Cia yra ${studentai[index++]}.`);
