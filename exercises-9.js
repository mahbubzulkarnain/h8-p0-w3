/*
Logic Challenge - Mencari Mean

Problem
Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut. Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan.

Code
function cariMean(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
*/

function cariMean(arr) {
    // you can only write your code here!
    let sum = 0
    let output = [0,0]
    let cursor = 0

    for(let i=0;i<arr.length;i++){
        sum += parseInt(arr[i])
    }
    sum /= arr.length

    let angka = ''
    for(let i = 0;i<(sum+'').length;i++){
        if((sum+'')[i] === '.'){
            cursor = 1
            output[0] = angka;
            angka = '';
        } else{
            angka += (sum+'')[i]
        }
    }
    output[cursor] = Number(angka[0])
    if(Number(output[1]) >= 5){
        output[0] = Number(output[0]) + 1;
    }
    return Number(output[0])
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7