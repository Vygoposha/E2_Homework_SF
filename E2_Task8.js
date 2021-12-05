let cars = new Map([
    ["Toyota", "TRD"],
    ["Mercedes", "AMG"],
    ["Audi","Sport"],
    ["BMW","M-tech"]
    ]);
for (let brand of cars.keys()){
    console.log(`У автомобильного бренда ${brand} есть спортивное подразделение - ${cars.get(brand)}`);
}