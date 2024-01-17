
const ClassCleanCode = {
    type: "Clases",
    practices: [
      {
        id: '1',
        name: 'Prefiere ES2015/ES6 clases en vez de funciones normales de ES5',
        description:
          "Prefiere utilizar clases de ES2015/ES6 en lugar de funciones normales de ES5 para obtener una herencia más legible y definiciones de métodos más claras. En el ejemplo mal hecho, la herencia y la construcción de las clases son complicadas y menos legibles. En cambio, el ejemplo bien hecho utiliza clases de ES2015/ES6 para una implementación más clara y concisa.",
        language: 'javascript',
        code1: `const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error('Instantiate Animal with \`new\`);
  }
      
  this.age = age;
};
      
Animal.prototype.move = function move() {};
      
const Mammal = function(age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error('Instantiate Mammal with \`new\`);
  }
      
  Animal.call(this, age);
  this.furColor = furColor;
};
      
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};
      
const Human = function(age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error('Instantiate Human with \`new\`);
  }
      
  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};
      
Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};`,
        code2: `class Animal {
  constructor(age) {
    this.age = age;
  }
      
  move() { /* ... */ }
}
      
class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }
      
  liveBirth() { /* ... */ }
}
      
class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }
      
  speak() { /* ... */ }
}`
      },
      {
        id: '2',
        name: 'Utiliza la agregación de métodos',
        description:
          "Aplica la técnica de agregación de métodos en JavaScript para hacer que tu código sea más expresivo y menos verboso. En el ejemplo mal hecho, las funciones de la clase Car no permiten el encadenamiento de métodos, resultando en un código más extenso. En cambio, el ejemplo bien hecho devuelve 'this' al final de cada función, lo que permite encadenar los métodos de la clase.",
        language: 'javascript',
        code1: `class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }
      
  setMake(make) {
    this.make = make;
  }
      
  setModel(model) {
    this.model = model;
  }
      
  setColor(color) {
    this.color = color;
  }
      
  save() {
    console.log(this.make, this.model, this.color);
  }
}
      
const car = new Car();
car.setColor('pink');
car.setMake('Ford');
car.setModel('F-150');
car.save();`,
        code2: `class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }
      
  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }
      
  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }
      
  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }
      
  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}
      
const car = new Car()
  .setColor('pink')
  .setMake('Ford')
  .setModel('F-150')
  .save();`
      },
      {
        id: '3',
        name: 'Prefiere composición en vez de la herencia',
        description:
          "Cuando sea posible, opta por la composición en lugar de la herencia. Aunque la herencia puede ser intuitiva, la composición generalmente ofrece una mayor flexibilidad y facilita la reutilización de código. En el ejemplo mal hecho, la clase EmployeeTaxData hereda de Employee, lo cual no es apropiado ya que los datos fiscales no son un tipo de empleado. En cambio, el ejemplo bien hecho utiliza composición, separando Employee y EmployeeTaxData en clases distintas y estableciendo una relación 'tener-un' mediante la composición.",
        language: 'javascript',
        code1: `class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
      
  // ...
}
      
// Mal porque EmployeeTaxData "tiene" datos fiscales. EmployeeTaxData no es un tipo de Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }
      
  // ...
}`,
        code2: `class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }
      
  // ...
}
      
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
      
  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(sssalary);
  }
  // ...
}`
      }
            
    ]
}

export default ClassCleanCode