function reverseString(text) {
    const a = text.length - 1;
    let reverse = '';

    for (let i=0; i < text.length; i++) {
        const position = a - i;
        const letter = text [position];
        reverse += letter;
    }
    return reverse;
}

console.log(reverseString('abcdef'), '-->', 'fedcba');
console.log(reverseString('labas'), '-->', 'sabal');
console.log(reverseString('sula'), '-->', 'alus');

function reverseString2(text) {
    for (let i=0; i < text.length; i++){
        const letter = text[i];
        reverse = letter + reverse;
    }

    return reverse;
}
console.log('------------');
console.log(reverseString('abcdef'), '-->', 'fedcba');
console.log(reverseString('labas'), '-->', 'sabal');
console.log(reverseString('sula'), '-->', 'alus');

function reverseString3(text) {
    let reverse = '';

    for(let i=text.length-1; i>0; i--) {
        reverse += text[i];

    }
    return reverse;

}
console.log('------------');
console.log(reverseString('abcdef'), '-->', 'fedcba');
console.log(reverseString('labas'), '-->', 'sabal');
console.log(reverseString('sula'), '-->', 'alus');