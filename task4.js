function sortArray(array){
    return new Promise((resolve, reject) =>{
        if (array.length === 0){
            reject("Масив порожній")
        }else{
            setTimeout(() =>{
                resolve(array.sort((a, b) => a - b));
            }, 2000);
        }
    });
}

sortArray([33, 5, 67, 1, 2, 444, 4])
.then(result => console.log(result.join(", ")))
.catch(error => console.log(error))