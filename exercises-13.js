/*
Logic Challenge - Target Terdekat

Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
function targetTerdekat(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
*/

function targetTerdekat(arr) {
    // you can only write your code here!
    if(!!!arr || arr.length < 2) return 0

    let countOX = [0, false]
    let countXO = [0, false]

    let listOfCountOX = []
    let listOfCountXO = []

    for(let i=0;i<arr.length;i++){
        if(arr[i]=='o'){
            countOX[0] = 0
            countOX[1] = true
            if(countXO[1]){
                countXO[1] = false
                listOfCountXO[listOfCountXO.length] = countXO[0]
            }
        } else if(arr[i]=='x'){
            countXO[0] = 0
            countXO[1] = true
            if(countOX[1]){
                countOX[1] = false
                listOfCountOX[listOfCountOX.length] = countOX[0]
            }
        }

        if(countOX[1]) countOX[0]++
        if(countXO[1]) countXO[0]++
    }

    countOX[1] = listOfCountOX[0]>0
    countXO[1] = listOfCountXO[0]>0

    if(listOfCountOX.length > 1){
        let angka = listOfCountOX[0]
        for(let i = 0;i<listOfCountOX.length;i++){
            if(angka > listOfCountOX[i]){
                angka = listOfCountOX[i]
            }
        }
        countOX[0] = angka
    }else if(listOfCountOX[0]>0) {
        countOX[0]=listOfCountOX[0]
    }

    if(listOfCountXO.length > 1){
        let angka = listOfCountXO[0]
        for(let i = 0;i<listOfCountXO.length;i++){
            if(angka > listOfCountXO[i]){
                angka = listOfCountXO[i]
            }
        }
        countXO[0] = angka
        countXO[1] = true
    }else if(listOfCountXO[0] > 0) {
        countXO[1] = true
        countXO[0] = listOfCountXO[0]
    }
    
    if(countOX[1] && countXO[1]){
        return (countOX[0] > countXO[0] ? countXO[0] : countOX[0])
    }
    if(countOX[1]){
        return countOX[0]
    }
    if(countXO[1]){
        return countXO[0]
    }
    return 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2