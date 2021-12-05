let input1 = prompt("input int");
input1 = +input1;

if (typeof input1 == 'number' && isNaN(input1)){
    even_odd = (input1 % 2 == 0) ? " - число четное" : " - число нечетное"
    console.log(input1 + even_odd)
}
else {
    alert("Упс, кажется, вы ошиблись")
}
