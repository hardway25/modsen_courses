class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    info() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`)
    }
}

const person1 = new Person('Александр', 23, 'Беларусь');
const person2 = new Person('Алексей', 25, 'Россия');

person1.info();
person2.info();