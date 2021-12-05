let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1, "1"];


let c = 1;
let i = 1;
while (c<arr.length){
    if (arr[c] === arr[c-1]){
        i++;}
    c++;}
if (i != c){
    console.log('Элементы в массиве не равны')
}else {
    console.log('Элементы в массиве равны')
}

let arr1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1, "1"];
let result = arr1.reduce(function (prev, item,index, array){

},array[item-1])