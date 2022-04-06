function letters(text, step) {
    if (typeof text !== 'string'){
        return 'ERROR: pirmasis kintamasis yra netinkamo tipo';
    }
    if (typeof text === ''){
        return 'ERROR: tekstas negal buti tuscias';
    }
    if (typeof step !== 'number'){
        return 'ERROR: antrasis kintamasis yra netinkamo tipo';
    }
    if (!isFinite(step)) {
        return 'ERROR: zingsnis turi buti tikras skaicius';
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis turi buti sveikas skaicius';
    }

    if (step === 0) {
        return 'ERROR: zingsnis negali buti lygus nuliui';
    }
    if (step > text.length) {
        return 'ERROR: zingsnis negali buti didesnis uz teksto ilgi';
    }

    let raides = '';

    for(let i= step - 1; i<text.length; i += step) {
        const raide = text [i];
        console.log (i,raide);
        raides += raide;
    }

    if (step > 0) {
    for(let i= step - 1; i<text.length; i += step) {
        const raide = text [i];
        
    } 
      }else {
        for (let i= text.length + step; i>0; i += step) {
            const raide = text [i];
        
    }
    }
    return raides;
}


console.log(letters(1561, 2), '-->', 'ERROR');
console.log(letters('labas', 'iki'), '-->', 'ERROR');
console.log(letters('labas', NaN), '-->', 'ERROR');
console.log(letters('labas', Infinity), '-->', 'ERROR');
console.log(letters('labas', -Infinity), '-->', 'ERROR');
console.log(letters('labas', 1.11111), '-->', 'ERROR');
console.log(letters('', 4), '-->', 'ERROR');
console.log(letters('abc', 0), '-->', 'ERROR');
console.log(letters('abc', 4), '-->', 'ERROR');

console.log(letters('abcdefg', 2), '--->', 'bdf');
console.log(letters('abcdefghijkl', 3), '--->', 'cfil');

