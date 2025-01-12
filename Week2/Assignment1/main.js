// Add Variables Here
let Number_One = 10;
let Number_Two = 20;

// Ouput
console.log(Number_One + '' + Number_Two) // Normal Concatenate => 1020
console.log(typeof (Number_One + '' + Number_Two)) // Normal Concatenate => String
console.log(`${Number_One}${Number_Two}`) // Template Literals Way => 1020
console.log(typeof `${Number_One}${Number_Two}`) // Template Literals Way => String
console.log(Number_One + '\n' +
    Number_Two)
/*
    Normal Concatenate
    20
    10
*/
console.log(`${Number_One}
${Number_Two}`)
/*
    Template Literals Way
    20
    10
*/