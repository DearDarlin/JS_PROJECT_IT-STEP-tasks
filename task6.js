function sortArrayAsync(array){
    return new Promise((resolve, reject) => {
        if (array.length === 0){
                reject("Масив порожній");
            }else{
                setTimeout(() => {
                    resolve(array.sort((a, b) => a - b));
                }, 2000);
            }
    })
}

async function main(){
    try{
        const sorting = await sortArrayAsync([9, 7, 4, 2, 3, 12, 44, 8]);
        console.log(sorting.join(", "));
    }catch(error){
        console.log("Error: ", error);
    }
}

main()