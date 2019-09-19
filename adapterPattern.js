class OldCalculator {
    constructor(){
        this.opertations = function(item1, item2, operation){
            switch(operation){
                case 'add': 
                    return item1 + item2;
                case 'sub':
                    return item1 - item2;
                default:
                    return NaN;
                
            }
        }
    }
}

class NewCalculator {
    constructor(){
       
        this.add = function(item1, item2){
           return item1 + item2
        }

        this.sub = function(item1, item2){
            return item1 - item2
        }
    }
}

class CalcAdapter {
    constructor(){
        const calculator = new NewCalculator();
        this.opertations = function(item1, item2, operation){
            switch(operation){
                case 'add':
                    return calculator.add(item1, item2);
                case 'sub':
                    return calculator.sub(item1, item2);
                default:
                    return NaN
            }

        }
    }
}

const oldCalc = new OldCalculator();
const adapter = new CalcAdapter();
const newCalc = new NewCalculator()
console.log(newCalc.add(5, 10))
console.log(oldCalc.opertations(2, 5, 'sub'))
console.log(adapter.opertations(5, 2, 'add'))