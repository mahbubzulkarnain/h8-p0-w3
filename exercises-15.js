/*
Logic Challenge - Mengelompokkan Hewan

Problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

Code
function groupAnimals(animals) {
  // you can only write your code here!
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
*/

function groupAnimals(animals) {
    // you can only write your code here!
    if(!!!animals || typeof animals[0] != 'string') return []

    let output = []
    let letter = []

    let isFound 
    for(let i=0;i<animals.length;i++){
        isFound = false
        for(let j=0;j<letter.length;j++){
            if(animals[i][0] == letter[j]){
                isFound = true
                break;
            }
        }
        if(!isFound){
            letter[letter.length] = animals[i][0]
        }
    }

    letter.sort()
    
    let item 
    for(let i=0;i<letter.length;i++){
        item = []
        for(let j=0;j<animals.length;j++){
            if(animals[j][0] == letter[i]){
                item.push(animals[j])
            }
        }
        output.push(item)
    }

    return output
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]