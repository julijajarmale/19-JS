function daugyba(a, b) {
    //jei a nera skaicius error
    if(typeof a !=='number'){
        return 'EROOR pirmas parametras turi buti skaicius';
    }
    if(typeof b !=='number'){
        return 'EROOR antras parametras turi buti skaicius';
    }

    return a * b;

};

console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(7, -5));
console.log(daugyba(7, 5.5));
console.log(daugyba(7.7, 5));

console.log('ERROR', '-->', daugyba(7.7, 'labas'));
console.log('ERROR', '-->', daugyba('labas', 5));
console.log('ERROR', '-->', daugyba(7.7, 'labas'));
