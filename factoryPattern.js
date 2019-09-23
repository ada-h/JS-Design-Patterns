class BallFactory {
    constructor() {
        this.createBall = function (type) {
            let ball
       
            switch(type){
                case 'football':
                     ball = new Football();
                     break;
                case 'soccer':
                    ball = new Football();
                    break
                case 'basketball':
                        ball = new Basketball();
                        break;
                case 'tennisball':
                    ball = new TennisBall();
                    break;
            }
            ball.roll = function () {
                return `${this._type} is rolling`;
            }
            return ball;
        }
    }
}

class Football {
    constructor() {
        this._type = 'football';
        this.kick = () => 'you kicked the ball';
    }
}

class Basketball{
    constructor(){
        this._type = 'basketball'
        this.bounce = function(){
            return 'You bounced the ball'
        }
    }
}

class TennisBall {
    constructor(){
        this._type = 'tennisball'
        this.swing = () => { return this._type };
    }
}

const factory = new BallFactory();

const myFootball = new factory.createBall('football');
const myBasketball = new factory.createBall('basketball')
const myTennis = new factory.createBall('tennisball')

console.log(myFootball.roll()); 
console.log(myFootball.kick()); 
console.log(myBasketball.bounce());
console.log(myTennis.swing())