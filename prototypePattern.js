const car = {
    noOfWheels : 4,
    start(){
        return 'Started'
    },
    stop(){
        return 'Stopped'
    },
    type: 'Rols Royce'
}

const myCar = Object.create(car, {owner: {value: 'Ada'}})

console.log(myCar.__proto__ === car); //returns true
console.log(myCar.start) // returns  started
console.log(myCar.stop) //returns stopped