const myName = 'Joseph';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 3);

class Person {
  private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}`;
  }
}

const joseph = new Person(15, 'Joseph');
joseph.getSummary();
