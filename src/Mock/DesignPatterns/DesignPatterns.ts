import { DesignPatternProps } from "./Interface";

const designPatternsData: DesignPatternProps = {
  name: "Design Patterns",
  description: "En resumen, aprender patrones de diseño es esencial para desarrollar habilidades sólidas de diseño de software y para crear sistemas de software de alta calidad que sean robustos, escalables y fáciles de mantener. Los patrones de diseño no solo proporcionan soluciones efectivas a problemas comunes, sino que también promueven buenas prácticas de programación y diseño que son fundamentales para el éxito en el desarrollo de software.",
  patterns: [
  {
    id: 1,
    name: 'Singleton',
    description: `
    El Patrón Singleton garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a esa instancia. En otras palabras, asegura que solo haya una única copia de la clase en toda la aplicación y proporciona un método para acceder a esa instancia desde cualquier lugar. Esto es útil cuando queremos tener un único punto de control para una funcionalidad específica, como una conexión a una base de datos o la configuración de la aplicación.
        `,
    code1: `class DatabaseConnection {
      connect() {
        console.log("Connected to the database");
      }
    }
    
    const dbInstanceA = new DatabaseConnection();
    const dbInstanceB = new DatabaseConnection();
    
    // Ambas instancias son independientes
    dbInstanceA.connect(); // Salida: Connected to the database
    dbInstanceB.connect(); // Salida: Connected to the database
      `,
    code2: `class DatabaseConnection {
      private static instance: DatabaseConnection;
    
      private constructor() {}
    
      static getInstance() {
        if (!DatabaseConnection.instance) {
          DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
      }
    
      connect() {
        console.log("Connected to the database");
      }
    }
    
    const singletonDBInstanceA = DatabaseConnection.getInstance();
    const singletonDBInstanceB = DatabaseConnection.getInstance();
    
    // Ambas instancias apuntan a la misma instancia única
    singletonDBInstanceA.connect(); // Salida: Connected to the database
    singletonDBInstanceB.connect(); // Salida: Connected to the database`
  },
  {
    id: 2,
    name: 'Observer',
    description: `El Patrón Observer establece una relación de uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente. En términos más simples, permite que un objeto (el sujeto) informe a otros objetos (los observadores) sobre sus cambios de estado sin conocer quiénes son esos observadores.`,
    code1: `class Subject {
      private state: number = 0;
    
      setState(newState: number) {
        this.state = newState;
      }
    
      getState() {
        return this.state;
      }
    }
    
    const subject = new Subject();
    
    // Observador 1
    const observer1 = {
      update: () => console.log("Observer 1 state updated:", subject.getState()),
    };
    
    // Observador 2
    const observer2 = {
      update: () => console.log("Observer 2 state updated:", subject.getState()),
    };
    
    subject.setState(1); // Salida: Observer 1 state updated: 1, Observer 2 state updated: 1`,
    code2: `interface Observer {
      update: () => void;
    }
    
    class Subject {
      private state: number = 0;
      private observers: Observer[] = [];
    
      addObserver(observer: Observer) {
        this.observers.push(observer);
      }
    
      notifyObservers() {
        this.observers.forEach(observer => observer.update());
      }
    
      setState(newState: number) {
        this.state = newState;
        this.notifyObservers();
      }
    
      getState() {
        return this.state;
      }
    }
    
    // Observador 1
    const observer1: Observer = {
      update: () => console.log("Observer 1 state updated:", subject.getState()),
    };
    
    // Observador 2
    const observer2: Observer = {
      update: () => console.log("Observer 2 state updated:", subject.getState()),
    };
    
    const subject = new Subject();
    subject.addObserver(observer1);
    subject.addObserver(observer2);
    
    subject.setState(1); // Salida: Observer 1 state updated: 1, Observer 2 state updated: 1`
  },
  {
    id: 3,
    name: 'Factory',
    description: `El Patrón Factory proporciona una interfaz para crear objetos en una superclase, pero permite que las subclases alteren el tipo de objetos que se crearán. Es útil cuando una clase no puede anticipar la clase de objetos que debe crear. En lugar de instanciar objetos directamente, la clase utiliza una interfaz común para crear objetos, delegando la responsabilidad de qué clase concreta instanciar a las subclases.`,
    code1: `class Animal {
      makeSound() {
        // ...
      }
    }
    
    class Dog extends Animal {
      makeSound() {
        console.log("Woof!");
      }
    }
    
    class Cat extends Animal {
      makeSound() {
        console.log("Meow!");
      }
    }
    
    // Cliente
    const animal = new Cat();
    animal.makeSound(); // Meow!`,
    code2: `interface Animal {
      makeSound(): void;
    }
    
    class Dog implements Animal {
      makeSound() {
        console.log("Woof!");
      }
    }
    
    class Cat implements Animal {
      makeSound() {
        console.log("Meow!");
      }
    }
    
    // Factory
    class AnimalFactory {
      createAnimal(type: string): Animal {
        switch (type) {
          case "dog":
            return new Dog();
          case "cat":
            return new Cat();
          default:
            throw new Error("Invalid animal type");
        }
      }
    }
    
    // Cliente
    const animalFactory = new AnimalFactory();
    const animal = animalFactory.createAnimal("cat");
    animal.makeSound(); // Meow!`
  },
  {
    id: 4,
    name: 'Decorator',
    description: `El Patrón Decorator permite agregar o modificar comportamientos de objetos en tiempo de ejecución sin modificar su estructura. En otras palabras, se envuelve un objeto original con una serie de clases decoradoras que proporcionan funcionalidades adicionales.`,
    code1: `class Coffee {
      cost() {
        return 5;
      }
    }
    
    // Cliente
    const coffee = new Coffee();
    console.log(coffee.cost()); // 5`,
    code2: `interface Coffee {
      cost(): number;
    }
    
    class SimpleCoffee implements Coffee {
      cost() {
        return 5;
      }
    }
    
    class MilkDecorator implements Coffee {
      private coffee: Coffee;
    
      constructor(coffee: Coffee) {
        this.coffee = coffee;
      }
    
      cost() {
        return this.coffee.cost() + 2;
      }
    }
    
    class SugarDecorator implements Coffee {
      private coffee: Coffee;
    
      constructor(coffee: Coffee) {
        this.coffee = coffee;
      }
    
      cost() {
        return this.coffee.cost() + 1;
      }
    }
    
    // Cliente
    let coffee: Coffee = new SimpleCoffee();
    coffee = new MilkDecorator(coffee);
    coffee = new SugarDecorator(coffee);
    
    console.log(coffee.cost()); // 8`
  }
  ],
};

export default designPatternsData