import { DetailsCleanCodeProps } from './Interfaces';
const ObjectsCleanCode: DetailsCleanCodeProps = {
    type: "Objetos y estructuras de datos",
    practices: [
      {
        id: '1',
        name: 'Utiliza getters y setters',
        description:
          "Utiliza getters y setters para acceder a datos dentro de los objetos en lugar de buscar directamente una propiedad. Esto ofrece beneficios como facilitar la validación, encapsular la representación interna y permitir la carga perezosa de propiedades. En el ejemplo mal hecho, la propiedad 'balance' se accede y actualiza directamente. En cambio, el ejemplo bien hecho utiliza getters y setters para acceder y modificar el saldo de manera controlada.",
        language: 'javascript',
        code1: `function makeBankAccount() {
  // ...
        
  return {
    balance: 0,
    // ...
  };
}
        
const account = makeBankAccount();
account.balance = 100;`,
        code2: `function makeBankAccount() {
  // this one is private
  let balance = 0;
      
  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }
      
  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }
      
  return {
    // ...
    getBalance,
    setBalance,
  };
}
      
const account = makeBankAccount();
account.setBalance(100);`
      },
      {
        id: '2',
        name: 'Haz que los objetos tengan miembros privados',
        description:
          "Haz que los objetos tengan miembros privados utilizando closures. En el ejemplo mal hecho, la propiedad 'name' es accesible desde fuera del objeto, lo que puede llevar a manipulaciones no deseadas. En cambio, el ejemplo bien hecho utiliza una función de fábrica para crear objetos con miembros privados, evitando el acceso directo a 'name' desde fuera del objeto.",
        language: 'javascript',
        code1: `const Employee = function(name) {
  this.name = name;
};
      
Employee.prototype.getName = function getName() {
  return this.name;
};
      
const employee = new Employee('John Doe');
console.log(\`Employee name: \${employee.getName()}\`); // Employee name: John Doe
delete employee.name;
console.log(\`Employee name: \${employee.getName()}\`); // Employee name: undefined`,
        code2: `function makeEmployee(name) {
  return {
    getName() {
      return name;
    },
  };
}
      
const employee = makeEmployee('John Doe');
console.log(\`Employee name: \${employee.getName()}\`); // Employee name: John Doe
delete employee.name;
console.log(\`Employee name: \${employee.getName()}\`); // Employee name: John Doe`
      }
    ]
}

export default ObjectsCleanCode