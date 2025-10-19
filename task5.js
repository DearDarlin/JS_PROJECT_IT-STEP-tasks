function multiplyAsync(a, b){
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number"){
            reject("Некоректні значення");
        }else{
            setTimeout(() => {
                resolve(a*b);
            }, 2000);
        }
    });
}

async function main(){
    try{
        const multiplication = await multiplyAsync(6, 9);
        console.log("Multiplication: ", multiplication);
    }catch(error){
        console.log("Error: ", error)
    }
}

main()