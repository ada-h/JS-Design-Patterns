
class Icecream {
    constructor(flavour, price) {
      this.flavour = flavour;
      this.price = price;
    }
  }
  
  // factory for flyweight objects
  class IcecreamFactory {
    constructor() {
      this._icecreams = [];
    }
  
    createIcecream(flavour, price) {
      let icecream = this.getIcecream(flavour);
      if (icecream) {
        return icecream;
      } else {
        const newIcecream = new Icecream(flavour, price);
        this._icecreams.push(newIcecream);
        return newIcecream;
      }
    }
  
    getIcecream(flavour) {
      return this._icecreams.find(icecream => icecream.flavour === flavour);
    }
  }
  
  // usage
  const factory = new IcecreamFactory();
  
  const chocoVanilla = factory.createIcecream('chocolate and vanilla', 15);
  const vanillaChoco = factory.createIcecream('chocolate and vanilla', 15);
  const vanilla = factory.getIcecream("chocolate and vanilla")
  // reference to the same object
  console.log(chocoVanilla === vanillaChoco); // true
  console.log(chocoVanilla, vanillaChoco)
  console.log(vanilla)