/*
IF

Sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} else if {} else {}......else{}
Palyginimo operatoriai:
-visi: >, <, <=, >=, ==, !=, ===, !==
-naudotini: >, <, <=, >=, ===, !==
-Nenaudotini: ==, !=
*/

const a = 7;
const b = 55;

if (a > b) {
    console.log('A yra daugiau uz B')
} else {
    console.log ('A nera daugiau uz B');
}


const day = 1;
if(day === 1) {
    console.log ('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
}

console.log ('-----------');
const akiuSpalva = 'ruda';

if(akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai')
} else {
    if (akiuSpalva === 'melyna'){
        console.log('Melynakiai megsta melynes.');
    } else{
        if (akiuSpalva === 'ruda'){
            console.log('Rudaakiai yra melagiai');
        }
    }
}

console.log('-----------------');

const temperatura = 25;
const nuoKadaLaikomeJogSilta = 15;
const arYraKrituliu = true;

if(arYraKrituliu === true){
    //siuo metu lyja
   if (temperatura >= nuoKadaLaikomeJogSilta){
       console.log('varyk su maike');
} else{ 
    console.log('tau reikes kailiniu');
    } 
} else{
    //siuo metu nelyja
        if (temperatura >= nuoKadaLaikomeJogSilta){
            console.log('gali eiti nuogas');
        } else{ 
        console.log('Be striukes neapsieisi');
    }
    
}