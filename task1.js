function processArray(array, callback){
    let listed = [];
    for (let i = 0; i < array.length; i++){
        listed.push(callback(array[i]));
    }
    return listed;
}

function doubleElement(element){
    return element * 2;
}

function reverseElement(element){
    return element.toString().split("").reverse().join("");
}

console.log(processArray([1,2,3,4,5], doubleElement));
console.log(processArray(["hello", "word"], reverseElement))