const washDishes = () => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Посуд вимито");
            resolve();
        }, 2000);
    });
};

const cleanRoom = () => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Кімнату прибрано");
            resolve();
        }, 4000);
    });
};

const makeDinner = () => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Вечеря приготована");
            resolve();
        }, 7000);
    });
};

washDishes()
.then(() => cleanRoom())
.then(() => makeDinner());

