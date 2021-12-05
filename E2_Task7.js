let arr = [4,1,2,3,4,5,6,7,0,null,'1','14', -7, -0, -1];
let count1 = 0;
let count2 =0;

for (let i =0; i<arr.length; i++){
    if (arr[i] && typeof arr[i] == "number"){
        console.log(arr[i] +' '+ typeof arr[i])
        if (arr[i]%2 == 0){
        count2 ++}
    else {count1++}
    debugger
}}
console.log(`Количесво четных элементов в массиве - ${count2}, а нечетных - ${count1}`)
