const interviewQuestions = [
  {
    id: 1,
    question: "¿Cuál es el resultado del siguiente código?",
    code: `
      function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Lydia';
        let age = 21;
      }
      
      sayHi();
    `,
    options: {
      A: 'Lydia e undefined',
      B: 'Lydia y ReferenceError',
      C: 'ReferenceError y 21',
      D: 'undefined y ReferenceError',
    },
    correctAnswer: 'D',
    explanation: `
      Dentro de la función, primero declaramos la variable name con la palabra clave var. 
      Esto significa que la variable se eleva (se establece espacio en memoria durante la fase de creación) con el valor predeterminado de undefined, 
      hasta que realmente llegamos a la línea donde definimos la variable. Todavía no hemos definido la variable en la línea donde intentamos registrar la variable name, 
      por lo que aún tiene el valor de undefined.
  
      Las variables con la palabra clave let (y const) se elevan, pero a diferencia de var, no se inicializan. 
      No son accesibles antes de la línea en la que las declaramos (inicializamos). Esto se llama la "zona muerta temporal". 
      Cuando intentamos acceder a las variables antes de que se declaren, JavaScript arroja un ReferenceError.
    `,
  },
  {
    id: 2,
    question: "¿Cuál es el resultado?",
    code: `
      for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
    `,
    options: {
      A: '0 1 2 y 0 1 2',
      B: '0 1 2 y 3 3 3',
      C: '3 3 3 y 0 1 2',
    },
    correctAnswer: 'C',
    explanation: `
      Debido a la cola de eventos en JavaScript, la función de retorno de llamada de setTimeout se ejecuta después de que se ha completado el bucle. 
      En el primer bucle, la variable i se declaró con la palabra clave var, por lo que su valor era global. 
      Durante el bucle, incrementamos el valor de i en 1 cada vez, usando el operador unario ++. 
      Para cuando se invocó la función de retorno de llamada de setTimeout, i ya era igual a 3 en el primer ejemplo.
  
      En el segundo bucle, la variable i se declaró con la palabra clave let: las variables declaradas con let (y const) están limitadas al bloque (un bloque es cualquier cosa entre { }). 
      Durante cada iteración, i tendrá un nuevo valor, y cada valor está limitado al bloque del bucle.
    `,
  },
  {
    id: 3,
    question: "¿Cuál es el resultado?",
    code: `
      const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
      };
      
      console.log(shape.diameter());
      console.log(shape.perimeter());
    `,
    options: {
      A: '20 y 62.83185307179586',
      B: '20 y NaN',
      C: '20 y 63',
      D: 'NaN y 63',
    },
    correctAnswer: 'B',
    explanation: `
      Ten en cuenta que el valor de diameter es una función regular, mientras que el valor de perimeter es una función flecha (arrow function).
  
      Con las funciones flecha, la palabra clave this se refiere a su ámbito circundante actual, ¡a diferencia de las funciones regulares!
      Esto significa que cuando llamamos a perimeter, no se refiere al objeto shape, sino a su ámbito circundante (como window, por ejemplo).
  
      No hay un valor radius en ese objeto, lo que devuelve NaN.
    `,
  },
  {
    id: 4,
    question: "¿Cuál es el resultado?",
    code: `
      +true;
      !'Lydia';
    `,
    options: {
      A: '1 y false',
      B: 'false y NaN',
      C: 'false y false',
    },
    correctAnswer: 'A',
    explanation: `
      El signo más unario intenta convertir un operando a un número. true es 1, y false es 0.
  
      La cadena 'Lydia' es un valor verdadero (truthy). Lo que realmente estamos preguntando es "¿es este valor verdadero falsy?". Esto devuelve false.
    `,
  },
  {
    id: 5,
    question: '¿Cuál es verdadero?',
    code: `
      const bird = {
        size: 'small',
      };
      
      const mouse = {
        name: 'Mickey',
        small: true,
      };
    `,
    options: {
      A: 'mouse.bird.size no es válido',
      B: 'mouse[bird.size] no es válido',
      C: 'mouse[bird["size"]] no es válido',
      D: 'Todos son válidos',
    },
    correctAnswer: 'A',
    explanation: `
      En JavaScript, todas las claves de objetos son cadenas (a menos que sea un Símbolo). 
      Aunque no las escribamos como cadenas, siempre se convierten en cadenas en el fondo.
  
      JavaScript interpreta (o desempaqueta) las sentencias. 
      Cuando usamos la notación de corchetes, ve el primer corchete de apertura [ y continúa hasta que encuentra el corchete de cierre ]. 
      Solo entonces evaluará la sentencia.
  
      mouse[bird.size]: Primero evalúa bird.size, que es "small". mouse["small"] devuelve true.
  
      Sin embargo, con la notación de punto, esto no sucede. 
      mouse no tiene una clave llamada bird, lo que significa que mouse.bird es undefined. 
      Luego, solicitamos el tamaño usando la notación de punto: mouse.bird.size. 
      Dado que mouse.bird es undefined, estamos solicitando undefined.size. 
      Esto no es válido y lanzará un error similar a "No se puede leer la propiedad 'size' de undefined."
    `,
  },
  {
    id: 6,
    question: "¿Cuál es el resultado?",
    code: `
      let c = { greeting: 'Hey!' };
      let d;
      
      d = c;
      c.greeting = 'Hello';
      console.log(d.greeting);
    `,
    options: {
      A: 'Hello',
      B: 'Hey!',
      C: 'undefined',
      D: 'ReferenceError',
      E: 'TypeError',
    },
    correctAnswer: 'A',
    explanation: `
      En JavaScript, todos los objetos interactúan por referencia cuando se les asigna un valor entre sí.
  
      Primero, la variable c tiene un valor de un objeto. Más tarde, asignamos d con la misma referencia que c tiene al objeto.
      Cuando cambias un objeto, cambias todos.
    `,
  },
  {
    id: 7,
    question: "¿Cuál es el resultado?",
    code: `
      let a = 3;
      let b = new Number(3);
      let c = 3;
      
      console.log(a == b);
      console.log(a === b);
      console.log(b === c);
    `,
    options: {
      A: 'true false true',
      B: 'false false true',
      C: 'true false false',
      D: 'false true true',
    },
    correctAnswer: 'C',
    explanation: `
      new Number() es un constructor de función incorporado. Aunque parece un número, no es realmente un número: tiene muchas funciones adicionales y es un objeto.
  
      Cuando usamos el operador == (operador de igualdad), solo verifica si tiene el mismo valor. Ambos tienen el valor de 3, por lo que devuelve true.
  
      Sin embargo, cuando usamos el operador === (operador de igualdad estricta), tanto el valor como el tipo deben ser iguales. No lo es: new Number() no es un número, es un objeto. Ambos devuelven false.
    `,
  },
  {
    id: 8,
    question: "¿Cuál es el resultado?",
    code: `
      class Camaleón {
        static colorChange(newColor) {
          this.newColor = newColor;
          return this.newColor;
        }
      
        constructor({ newColor = 'verde' } = {}) {
          this.newColor = newColor;
        }
      }
      
      const freddie = new Camaleón({ newColor: 'morado' });
      console.log(freddie.colorChange('naranja'));
    `,
    options: {
      A: 'naranja',
      B: 'morado',
      C: 'verde',
      D: 'TypeError',
    },
    correctAnswer: 'D',
    explanation: `
      La función colorChange es estática. Los métodos estáticos están diseñados para vivir solo en el constructor en el que se crean y no se pueden heredar ni llamar en instancias de clase. Dado que freddie es una instancia de la clase Camaleón, la función no se puede llamar sobre ella. Se produce un TypeError.
    `,
  },
  {
    id: 9,
    question: "¿Cuál es el resultado?",
    code: `
      let greeting;
      greetign = {}; // ¡Error tipográfico!
      console.log(greetign);
    `,
    options: {
      A: '{}',
      B: 'ReferenceError: greetign no está definido',
      C: 'undefined',
    },
    correctAnswer: 'A',
    explanation: `
      Registra el objeto porque acabamos de crear un objeto vacío en el objeto global. Cuando cometimos el error tipográfico escribiendo greetign en lugar de greeting, el intérprete de JS realmente vio esto como:
  
      - global.greetign = {} en Node.js
      - window.greetign = {}, frames.greetign = {} y self.greetign en navegadores.
      - self.greetign en workers web.
      - globalThis.greetign en todos los entornos.
  
      Para evitar esto, podemos usar "use strict". Esto asegura que hayas declarado una variable antes de asignarle un valor.
    `,
  },
  {
    id: 10,
    question: '¿Qué sucede cuando hacemos esto?',
    code: `
      function bark() {
        console.log('¡Guau!');
      }
      
      bark.animal = 'perro';
    `,
    options: {
      A: 'Nada, esto está totalmente bien.',
      B: 'SyntaxError. No puedes agregar propiedades a una función de esta manera.',
      C: "Se registra '¡Guau!'.",
      D: 'ReferenceError',
    },
    correctAnswer: 'A',
    explanation: `
      Esto es posible en JavaScript porque las funciones son objetos (todo, excepto los tipos primitivos, son objetos).
  
      Una función es un tipo especial de objeto. El código que escribes por ti mismo no es la función real. La función es un objeto con propiedades. Esta propiedad es invocable.
    `,
  },
  {
    id: 11,
    question: "¿Cuál es la salida?",
    code: `
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const member = new Person('Lydia', 'Hallie');
    Person.getFullName = function() {
      return \`\${this.firstName} \${this.lastName}\`;
    };
    
    console.log(member.getFullName());
      `,
    options: {
      A: "TypeError",
      B: "SyntaxError",
      C: "Lydia Hallie",
      D: "undefined undefined",
    },
    correctAnswer: "A",
    explanation: `
    En JavaScript, las funciones son objetos y, por lo tanto, el método getFullName se agrega al objeto de la función constructora en sí. Por esa razón, podemos llamar a Person.getFullName(), pero member.getFullName arroja un TypeError.
      `,
  },
  {
    id: 12,
    question: "¿Cuál es la salida?",
    code: `
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const lydia = new Person('Lydia', 'Hallie');
    const sarah = Person('Sarah', 'Smith');
    
    console.log(lydia);
    console.log(sarah);
      `,
    options: {
      A: "Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined",
      B: "Person {firstName: 'Lydia', lastName: 'Hallie'} and Person {firstName: 'Sarah', lastName: 'Smith'}",
      C: "Person {firstName: 'Lydia', lastName: 'Hallie'} and {}",
      D: "Person {firstName: 'Lydia', lastName: 'Hallie'} and ReferenceError",
    },
    correctAnswer: "A",
    explanation: `
    Para sarah, no usamos la palabra clave new. Cuando usamos new, this se refiere al nuevo objeto vacío que creamos. Sin embargo, si no agregas new, this se refiere al objeto global.
    
    Dijimos que this.firstName es igual a "Sarah" y this.lastName es igual a "Smith". Lo que realmente hicimos es definir global.firstName = 'Sarah' y global.lastName = 'Smith'. sarah en sí queda indefinido, ya que no devolvemos ningún valor desde la función Person.
      `,
  },
  {
    id: 13,
    question: "¿Cuáles son las tres fases de la propagación de eventos?",
    options: {
      A: "Target > Capturing > Bubbling",
      B: "Bubbling > Target > Capturing",
      C: "Target > Bubbling > Capturing",
      D: "Capturing > Target > Bubbling",
    },
    correctAnswer: "D",
    explanation: `
  Durante la fase de captura, el evento atraviesa los elementos ancestros hasta llegar al elemento objetivo. Luego, llega al elemento objetivo, y comienza el burbujeo.
    `,
},
  {
    id: 14,
    pregunta: "¿Todos los objetos tienen prototipos?",
    options: {
      A: "true",
      B: "false",
    },
    correctAnswer: "B",
    explanation: `
  Todos los objetos tienen prototipos, excepto el objeto base. El objeto base es el objeto creado por el usuario o un objeto creado utilizando la palabra clave new. El objeto base tiene acceso a algunos métodos y propiedades, como .toString. ¡Esta es la razón por la cual puedes usar métodos incorporados de JavaScript! Todos esos métodos están disponibles en el prototipo. Aunque JavaScript no puede encontrarlo directamente en tu objeto, baja por la cadena de prototipos y lo encuentra allí, lo que lo hace accesible para ti.
    `,
  },
  {
    id: 15,
    question: "¿Cuál es el resultado del siguiente código?",
    code: `
      function sum(a, b) {
        return a + b;
      }
  
      sum(1, '2');
    `,
    options: {
      A: 'NaN',
      B: 'TypeError',
      C: '"12"',
      D: '3',
    },
    correctAnswer: 'C',
    explanation: `
      JavaScript es un lenguaje de tipado dinámico: no especificamos qué tipos son ciertas variables. 
      Los valores pueden convertirse automáticamente en otro tipo sin que lo sepas, lo que se llama coerción de tipo implícita. 
      La coerción es convertir de un tipo a otro.
  
      En este ejemplo, JavaScript convierte el número 1 en una cadena, para que la función tenga sentido y devuelva un valor. 
      Durante la adición de un tipo numérico (1) y un tipo de cadena ('2'), el número se trata como una cadena. 
      Podemos concatenar cadenas como "Hola" + "Mundo", por lo que lo que sucede aquí es "1" + "2" que devuelve "12".
    `,
  },
  {
    id: 16,
    question: "¿Cuál es el resultado del siguiente código?",
    code: `
      let number = 0;
      console.log(number++);
      console.log(++number);
      console.log(number);
    `,
    options: {
      A: '1 1 2',
      B: '1 2 2',
      C: '0 2 2',
      D: '0 1 2',
    },
    correctAnswer: 'C',
    explanation: `
      El operador unario de sufijo ++:
  
      - Retorna el valor (esto devuelve 0)
      - Incrementa el valor (number ahora es 1)
  
      El operador unario de prefijo ++:
  
      - Incrementa el valor (number ahora es 2)
      - Retorna el valor (esto devuelve 2)
  
      Esto devuelve 0 2 2.
    `,
  },
  {
    id: 17,
    question: "¿Cuál es el resultado del siguiente código?",
    code: `
      function getPersonInfo(one, two, three) {
        console.log(one);
        console.log(two);
        console.log(three);
      }
      
      const person = 'Lydia';
      const age = 21;
      
      getPersonInfo \${person} is \${age} years old;
    `,
    options: {
      A: '"Lydia" 21 ["", " is ", " years old"]',
      B: '["", " is ", " years old"] "Lydia" 21',
      C: '"Lydia" ["", " is ", " years old"] 21',
    },
    correctAnswer: 'B',
    explanation: `
      Si utilizas plantillas de cadenas etiquetadas (tagged template literals), el valor del primer argumento siempre es un array de los valores de cadena. 
      ¡Los argumentos restantes obtienen los valores de las expresiones pasadas!
    `,
  },
  {
    id: 18,
    question: "What's the output?",
    code: `
    function checkAge(data) {
      if (data === { age: 18 }) {
        console.log('You are an adult!');
      } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
      } else {
        console.log("Hmm.. You don't have an age I guess");
      }
    }
  
    checkAge({ age: 18 });
    `,
    options: {
      A: 'You are an adult!',
      B: 'You are still an adult.',
      C: "Hmm.. You don't have an age I guess",
    },
    correctAnswer: 'C',
    explanation: `
    When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.
  
    The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
  
    This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.
    `,
  },
  {
    id: 19,
    question: "What's the output?",
    code: `
    function getAge(...args) {
      console.log(typeof args);
    }
  
    getAge(21);
    `,
    options: {
      A: '"number"',
      B: '"array"',
      C: '"object"',
      D: '"NaN"',
    },
    correctAnswer: 'C',
    explanation: `
    The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object".
    `,
  },
  {
    id: 20,
    question: "What's the output?",
    code: `
  function getAge() {
    'use strict';
    age = 21;
    console.log(age);
  }
  
  getAge();
    `,
    options: {
      A: '21',
      B: 'undefined',
      C: 'ReferenceError',
      D: 'TypeError',
    },
    correctAnswer: 'C',
    explanation: `
  With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.
    `,
  },
  {
    id: 21,
    question: "What's the value of sum?",
    code: `
  const sum = eval('10*10+5');
    `,
    options: {
      A: 105,
      B: '"105"',
      C: 'TypeError',
      D: '"10*10+5"',
    },
    correctAnswer: 'A',
    explanation: `
  eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.
    `,
  },
  {
    id: 22,
    question: "How long is cool_secret accessible?",
    code: `
  sessionStorage.setItem('cool_secret', 123);
    `,
    options: {
      A: "Forever, the data doesn't get lost.",
      B: 'When the user closes the tab.',
      C: 'When the user closes the entire browser, not only the tab.',
      D: 'When the user shuts off their computer.',
    },
    correctAnswer: 'B',
    explanation: `
  The data stored in sessionStorage is removed after closing the tab.
  
  If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.
    `,
  },
  {
    id: 23,
    question: "What's the output?",
    code: `
  var num = 8;
  var num = 10;
  
  console.log(num);
    `,
    options: {
      A: 8,
      B: 10,
      C: 'SyntaxError',
      D: 'ReferenceError',
    },
    correctAnswer: 'B',
    explanation: `
  With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.
  
  You cannot do this with let or const since they're block-scoped and therefore can't be redeclared.
    `,
  },
  {
    id: 24,
    question: "What's the output?",
    code: `
  const obj = { 1: 'a', 2: 'b', 3: 'c' };
  const set = new Set([1, 2, 3, 4, 5]);
  
  obj.hasOwnProperty('1');
  obj.hasOwnProperty(1);
  set.has('1');
  set.has(1);
    `,
    options: {
      A: 'false true false true',
      B: 'false true true true',
      C: 'true true false true',
      D: 'true true true true',
    },
    correctAnswer: 'C',
    explanation: `
  All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.
  
  It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.
    `,
  },
  {
    id: 25,
    question: "What's the output?",
    code: `
  const obj = { a: 'one', b: 'two', a: 'three' };
  console.log(obj);
    `,
    options: {
      A: '{ a: "one", b: "two" }',
      B: '{ b: "two", a: "three" }',
      C: '{ a: "three", b: "two" }',
      D: 'SyntaxError',
    },
    correctAnswer: 'C',
    explanation: `
  If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.
    `,
  },
  {
    id: 26,
    question: "The JavaScript global execution context creates two things for you: the global object, and the 'this' keyword.",
    options: {
      A: 'true',
      B: 'false',
      C: 'it depends',
    },
    correctAnswer: 'A',
    explanation: `
  The base execution context is the global execution context: it's what's accessible everywhere in your code.
    `,
  },
  {
    id: 27,
    question: "What's the output?",
    code: `
  for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
    `,
    options: {
      A: '1 2',
      B: '1 2 3',
      C: '1 2 4',
      D: '1 3 4',
    },
    correctAnswer: 'C',
    explanation: `
  The continue statement skips an iteration if a certain condition returns true.
    `,
  },
  {
    id: 28,
    question: "What's the output?",
    code: `
  String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
  };
  
  const name = 'Lydia';
  
  console.log(name.giveLydiaPizza())
    `,
    options: {
      A: 'Just give Lydia pizza already!',
      B: 'TypeError: not a function',
      C: 'SyntaxError',
      D: 'undefined',
    },
    correctAnswer: 'A',
    explanation: `
  String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!
    `,
  },
  {
    id: 29,
    question: "What's the output?",
    code: `
  const a = {};
  const b = { key: 'b' };
  const c = { key: 'c' };
  
  a[b] = 123;
  a[c] = 456;
  
  console.log(a[b]);
    `,
    options: {
      A: 123,
      B: 456,
      C: undefined,
      D: 'ReferenceError',
    },
    correctAnswer: 'B',
    explanation: `
  Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.
  
  However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.
  
  Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.
    `,
  },
  {
    id: 30,
    question: "What's the output?",
    code: `
  const foo = () => console.log('First');
  const bar = () => setTimeout(() => console.log('Second'));
  const baz = () => console.log('Third');
  
  bar();
  foo();
  baz();
    `,
    options: {
      A: 'First Second Third',
      B: 'First Third Second',
      C: 'Second First Third',
      D: 'Second Third First',
    },
    correctAnswer: 'B',
    explanation: `
  We have a setTimeout function and invoked it first. Yet, it was logged last.
  
  This is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. The WebAPI gives us the setTimeout function to start with, and for example the DOM.
  
  After the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack.
    `,
  }
];

export default interviewQuestions;
