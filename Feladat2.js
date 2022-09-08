let cats = [];
for (let i = 0; i < 20; i++){
    cats.push({
        name: "Cirmos" + (i + 1),
        age: Math.floor(Math.random() * (10 - 2 + 1) + 2)
    })
}

for(let j = 0; j < 20; j++){
    if (cats[j].age == 2){
        console.log(cats[j]);
    }
}