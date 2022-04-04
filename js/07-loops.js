/* const pazymiai = [10, 2, 8, 4, 6, 8, 10, 1];

const pazymiuKiekis = pazymiai.length;
let pazymiuSuma = 0;

pazymiuSuma += pazymiai[0];
pazymiuSuma += pazymiai[1];
pazymiuSuma += pazymiai[2];
pazymiuSuma += pazymiai[3];
pazymiuSuma += pazymiai[4];
pazymiuSuma += pazymiai[5];
pazymiuSuma += pazymiai[6];
pazymiuSuma += pazymiai[7];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);
*/
/*
Ciklas = LOOP: for, while, for-in, foreach...
for- visu ciklu tevas */

const pazymiai = [10, 2, 8, 4, 6];

let sumaFor = 0;
for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai [i];
    sumaFor += pazymys;

    console.log (`${i}) pazymys ${pazymys} [${sumaFor}]`);
}