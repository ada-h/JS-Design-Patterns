class BallFactory {
    constructor() {
        this.createBall = function (type) {
            let ball
            if (type === 'soccer' || type === 'football') {
                ball = new Football();
            } else if (type === 'basketball') {
                ball = new Basketball();
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
        this._type = 'football'
        this.kick = function(){
            return 'You kicked the football'
        }
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

const factory = new BallFactory();

const myFootball = new factory.createBall('football');
const myBasketball = new factory.createBall('basketball')

console.log(myFootball.roll()); 
console.log(myBasketball.roll()); 
console.log(myFootball.kick()); 
console.log(myBasketball.bounce());