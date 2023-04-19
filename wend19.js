// import hello2, { hello } from './learnin19';

// console.log(hello(2, 5));
// console.log(hello2(2, 5));


class car {
    name;
    model;

    constructor(carName, carModel) {
        this.name = carName;
        this.model = carModel;
    }

    get modelGetter() {
        return this.model;
    }

    set modelSetter(model) {
        this.model = model;
    }
}

const car1 = new car("Honda", " city");
console.log(car1.name, car1.model);
