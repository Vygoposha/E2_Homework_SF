const someArray = [1,8,"q",99,"w",true];
console.log(someArray.length);
for (let i =0;i<someArray.length; i++) {
    console.log(someArray[i]);
}

const anotherArray = [3, false, "13", 836, 12];
console.log(anotherArray.length);
anotherArray.map(function (value, index, array){
    console.log(value);
    return anotherArray
})