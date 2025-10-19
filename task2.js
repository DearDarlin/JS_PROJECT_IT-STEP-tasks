function filterArray(array, callback){
    let listed = [];
    for(let i = 0; i< array.length; i++){
        if(callback(array[i])){
            listed.push(array[i])
        }
    }
    return listed;
}

function isEven(number){
    return number % 2 === 0;
}

function isShortWord(word){
    return word.length <= 4;
}

console.log(filterArray([1,2,3,4,5], isEven));
console.log(filterArray(["cat","elephant", "dog", "bird"], isShortWord));