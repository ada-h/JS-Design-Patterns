class DC {
    constructor(name, specialAbility){
        this._name = name;
        this._specialAbility = specialAbility

        this.getDetails = function(){
            return `${this._name } is a ${this._specialAbility}`
        }
    }
    
}


const SuperMan = new DC ('SuperMan', 'member');
console.log(SuperMan.getDetails());
