let array = [];
for(let i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(array)
array.sort((a, b) => a -b);
console.log(array)
