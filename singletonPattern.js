class Singleton {
    constructor(data){
        if(Singleton.exists){
            return Singleton.instance;
        }
        this._data = data;
        Singleton.instance = this;
        Singleton.exists = true;
        return this;
    }

    getData(){
        return this._data;
    }

    setData(data){
        this._data = data;
    }
}

const mongo = new Singleton('single');
console.log(mongo.getData())

const mySql = new Singleton('Saed');
console.log(mySql.getData())