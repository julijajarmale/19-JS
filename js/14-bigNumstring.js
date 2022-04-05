function bigNum(list) {
    //Validation
    if (typeof list !=='object'){
        return 'ERROR: netinkamas tipas';
    } 
    if (list.length === 0){
        return 'ERROR: sarasas negali buti tuscias';
    } 
//logic
    let biggestNumber = -Infinity;
    
    for (let i=0; i< list.length; i++){
        const number = list[i];
        //inner validation
        if (typeof number !== 'number' ||!isFinite(number)){ 
            continue;
        }
        //inner logic
        if (number > biggestNumber) {
            biggestNumber = number
        }
    
    }
    //result validation
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    }
    //result return
return biggestNumber;
}

console.log(bigNum('pomidoras'), '-->', 'Error');
console.log(bigNum([]), '-->', 'Error');

console.log(bigNum([5]), '-->', 5);
console.log(bigNum([-5, 78, 14, 0, 18]), '-->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '-->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', 1);

console.log(bigNum(['x']), '-->', 'Error');
console.log(bigNum(['x', 1, 2, 3 ]), '-->', 3);
console.log(bigNum(['x', true, [], -Infinity, NaN, Infinity]), '-->', 3);

