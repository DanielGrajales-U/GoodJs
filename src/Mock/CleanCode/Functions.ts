const FunctionCleanCode = {
    type: 'Funciones',
    practices: [
      {
        id: '1',
        name: 'Argumentos de funciones (2 o menos idealmente)',

        description:
          'Limitar la cantidad de parámetros en las funciones es crucial para facilitar las pruebas y mejorar la claridad del código. Mantener uno o dos argumentos es ideal, ya que más allá de tres, se puede caer en una explosión combinatoria que complica las pruebas y la comprensión del código. Se recomienda consolidar funciones o, en caso de necesitar muchos argumentos, utilizar objetos para encapsularlos. La destructuración en ES2015/ES6 ayuda a hacer más claro el llamado a la función, evita efectos secundarios no deseados y permite a los linters identificar argumentos no utilizados. Ejemplificado, un enfoque recomendado es utilizar un objeto como argumento y desestructurarlo en la firma de la función para mejorar la legibilidad y el mantenimiento del código.',

        language: 'javascript',

        code1: `function crearMenu(titulo, contexto, textoDelBoton, cancelable) {
// ...
}`,

        code2: `function crearMenu({ titulo, contexto, textoDelBoton, cancelable }) {
// ...
}
        
crearMenu({
titulo: 'Foo',
contexto: 'Bar',
textoDelBoton: 'Baz',
cancelable: true
});`,
      },
      {
        id: '2',
        name: 'Las funciones deben tener una sola responsabilidad',

        description:
          "Esta regla es fundamental en ingeniería de software: las funciones deben tener una única responsabilidad. Cuando una función realiza más de una tarea, se dificultan las pruebas, la composición y la comprensión del código. Aislar una función para que realice solo una acción facilita su mejora y contribuye a un código más limpio. La clave es comprender que las funciones deben hacer 'una cosa y hacerla bien'. El ejemplo mal hecho muestra una función que busca y escribe clientes activos, mientras que el ejemplo bien hecho divide esta lógica en dos funciones separadas: una para filtrar clientes activos y otra para escribir clientes. Este enfoque no solo mejora la legibilidad, sino que también facilita la prueba y el mantenimiento del código. La regla de una sola responsabilidad es esencial para avanzar como desarrollador.",

        language: 'javascript',

        code1: `function escribirClientes(clients) {
          clientes.forEach((cliente) => {
const recordDelCliente = database.busca(cliente);
if (recordDelCliente.esActivo()) {
   escribir(cliente);
 }
});
}`,

        code2: `function escribirClientes(clientes) {
          clientes
.filter(esActivoElCliente)
.forEach(email);
}
        
function esActivoElCliente(cliente) {
const recordDelCliente = database.busca(cliente);
return recordDelCliente.esActivo();
}`,
      },
      {
        id: '3',
        name: 'Los nombres de las funciones deben explicar lo que hacen',

        description:
          "Es esencial que los nombres de las funciones expliquen claramente su propósito. En el ejemplo mal hecho, la función 'adelantarLaFechaPorUnDia' no proporciona una comprensión inmediata de su acción real, especialmente cuando se ve su uso. En cambio, el ejemplo bien hecho presenta una función llamada 'agregarMesAlDia' que claramente indica su propósito de agregar un mes a una fecha. Este enfoque mejora significativamente la comprensión y legibilidad del código, haciendo que el propósito y la acción de la función sean evidentes desde su nombre. Elegir nombres descriptivos y explicativos es clave para facilitar el mantenimiento y la colaboración en el desarrollo de software.",

        language: 'javascript',

        code1: `function parseBetterJSAlternative(code) {
const REGEXES = [
// ...
];
        
const statements = code.split(' ');
const tokens = [];
REGEXES.forEach((REGEX) => {
statements.forEach((statement) => {
   // ...
  });
});
        
const ast = [];
tokens.forEach((token) => {
  // lex...
});
        
const ast.forEach((node) => {
// parse...
});
}`,

        code2: `function tokenize(code) {
const REGEXES = [
  // ...
];
        
const statements = code.split(' ');
const tokens = [];
REGEXES.forEach((REGEX) => {
statements.forEach((statement) => {
   tokens.push( /* ... */ );
  });
});
        
return tokens;
}
        
function lexer(tokens) {
const ast = [];
tokens.forEach((token) => {
  ast.push( /* ... */ );
});
        
return ast;
}
        
function parseBetterJSAlternative(code) {
const tokens = tokenize(code);
const ast = lexer(tokens);
ast.forEach((node) => {
  // parse...
});
}`,
      },
      {
        id: '4',
        name: 'Eliminar el código duplicado',

        description:
          'Evitar repeticiones mejora la mantenibilidad del código y reduce la posibilidad de errores al actualizar la lógica. Imagina gestionar el inventario en un restaurante: si tienes varias listas, cada una debe actualizarse individualmente. Sin embargo, al tener una sola lista, cualquier cambio se reflejará en un único lugar.',

        language: 'javascript',

        code1: `function showDeveloperList(developers) {
developers.forEach((developer) => {
  const expectedSalary = developer.calculateExpectedSalary();
  const experience = developer.getExperience();
  const githubLink = developer.getGithubLink();
  const data = {
    expectedSalary,
    experience,
    githubLink
  };
        
  render(data);
});
}
        
function showManagerList(managers) {
managers.forEach((manager) => {
  const expectedSalary = mancalculateExpectedSalary();
  const experience = manager.getExperience();
  const portfolio = manager.getMBAProjects();
  const data = {
    expectedSalary,
    experience,
    portfolio
  };
        
  render(data);
});
}`,

        code2: `function showEmployeeList(employees) {
employees.forEach((employee) => {
  const expectedSalary = emplcalculateExpectedSalary();
  const experience = employee.getExperience();
        
  let portfolio = employee.getGithubLink();
        
  if (employee.type === 'manager') {
    portfolio = employee.getMBAProjects();
  }
        
  const data = {
    expectedSalary,
    experience,
    portfolio
  };
        
  render(data);
});
}`,
      },
      {
        id: '5',
        name: 'Crear objetos predefinidos con Object.assign',

        description:
          'Crear objetos predefinidos con Object.assign es una práctica que mejora la claridad y evita la necesidad de verificar cada propiedad individualmente. En el ejemplo mal hecho, se intenta establecer valores predeterminados para las propiedades del objeto menuConfig mediante comprobaciones condicionales, lo que puede resultar tedioso y propenso a errores.',

        language: 'javascript',

        code1: `const menuConfig = {
title: null,
body: 'Bar',
buttonText: null,
cancellable: true
};
        
function createMenu(config) {
config.title = config.title || 'Foo';
config.body = config.body || 'Bar';
config.buttonText = config.buttonText || 'Baz';
config.cancellable = config.cancellableundefined ? config.cancellable : true;
}
        
createMenu(menuConfig);`,

        code2: `const menuConfig = {
title: 'Order',
// El usuario no tenía la clave 'body'
buttonText: 'Send',
cancellable: true
};
        
function createMenu(config) {
config = Object.assign({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
}, config);
// el variable 'config' ahora iguala: {tit"Order", body:"Bar", buttonText: "Sencancellable: true}
// ...
}
        
createMenu(menuConfig);`,
      },
      {
        id: '6',
        name: 'No utilices "marcadores" como parámetros de las funciones',

        description:
          'Evita el uso de "marcadores" como parámetros de las funciones. Los marcadores indican que una función realiza más de una tarea. Las funciones deben hacer una sola cosa. En el ejemplo mal hecho, la función `createFile` toma un parámetro `temp` como marcador para decidir si debe crear un archivo temporal o no. Es preferible dividir estas funcionalidades en funciones más pequeñas, como `createFile` y `createTempFile`, para mantener la claridad y la simplicidad.',

        language: 'javascript',

        code1: `function createFile(name, temp) {
if (temp) {
  fs.create('./temp/name');
} else {
  fs.create(name);
}
}`,

        code2: `function createFile(name) {
fs.create(name);
}
        
function createTempFile(name) {
createFile('./temp/name');
}`,
      },
      {
        id: '7',
        name: 'Evitar que las funciones produzcan efectos extras (parte 1)',

        description:
          'Una función produce un efecto extra si hace cualquier cosa más que solo tomar un valor y volverlo/los). Un efecto extra podría ser escribir a un archivo, modificar un variable global, o accidentalmente enviar todo tu dinero a un desconfiado..',

        language: 'javascript',

        code1: `// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = 'Ryan McDermott';
        
function splitIntoFirstAndLastName() {
name = name.split(' ');
}
        
splitIntoFirstAndLastName();
        
console.log(name); // ['Ryan', 'McDermott'];`,

        code2: `function splitIntoFirstAndLastName(name) {
return name.split(' ');
}
        
const name = 'Ryan McDermott';
const newName = splitIntoFirstAndLas(name);
        
console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];`,
      },
      {
        id: '8',
        name: 'Evitar los efectos extras (parte 2)',
        description:
          "Evitar efectos extras es crucial para mantener la integridad y consistencia del código. En JavaScript, los primitivos se pasan por valor, mientras que objetos/arrays se pasan por referencia. Si una función modifica un array u objeto compartido, afectará a otras funciones que utilicen dicho array. Este fenómeno puede generar problemas, como cambios no deseados en datos compartidos debido a operaciones asincrónicas. La solución recomendada es copiar el objeto/array en la función para evitar efectos secundarios. Aunque puede haber casos específicos donde modificar el objeto de entrada sea necesario, adoptar la práctica de copiar asegura una programación más segura y predecible. Es importante tener en cuenta que copiar objetos grandes puede afectar la velocidad del programa, pero existen recursos que permiten hacerlo eficientemente sin perder rendimiento.",
        language: 'javascript',
        
        code1: `const addItemToCart = (cart, item) => {
cart.push({ item, date: Date.now() });
};`,
        code2: `const addItemToCart = (cart, item) => {
return [...cart, { item, date : Date.now() }];
};`
      },
      {
        id: '9',
        name: 'No intentes cambiar las funciones globales',
        description:
          "Modificar las funciones globales en JavaScript puede resultar en conflictos y errores inesperados, especialmente al trabajar con otras bibliotecas o APIs. Cambiar prototipos de clases nativas, como en el ejemplo mal hecho, puede causar problemas al colisionar con métodos ya existentes en otras bibliotecas. Es preferible utilizar las clases de ES2015/ES6 y extenderlas, evitando así la modificación directa de funciones globales. En lugar de añadir métodos directamente al prototipo de Array.prototype, se puede crear una nueva clase (por ejemplo, SuperArray) que extienda la clase Array y agregar los métodos deseados a la nueva clase. Esto promueve una mejor encapsulación y previene conflictos con otras implementaciones.",
        language: 'javascript',
        code1: `Array.prototype.diff = function diff(comparisonArray) {
const hash = new Set(comparisonArray);
return this.filter(elem => !hash.has(elem));
};`,
        code2: `class SuperArray extends Array {
diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
}
}`
      },
      {
        id: '10',
        name: 'Favorece a la programación funcional en vez de la programación imperativa',
        description:
          "Prefiere el enfoque de programación funcional sobre el imperativo siempre que sea posible en JavaScript. La programación funcional tiende a ser más clara, fácil de comprobar y propensa a errores. En el ejemplo mal hecho, se utiliza un enfoque imperativo para calcular la 'totalOutput' mediante un bucle for. En cambio, el ejemplo bien hecho utiliza programación funcional con los métodos 'map' y 'reduce' para lograr el mismo resultado de manera más declarativa. Al adoptar un estilo funcional, se promueve un código más conciso y legible, mejorando la mantenibilidad y la comprensión del código.",
        language: 'javascript',
        code1: `const programmerOutput = [
{
  name: 'Uncle Bobby',
  linesOfCode: 500
}, {
  name: 'Suzie Q',
  linesOfCode: 1500
}, {
  name: 'Jimmy Gosling',
  linesOfCode: 150
}, {
  name: 'Gracie Hopper',
  linesOfCode: 1000
}
];
        
let totalOutput = 0;
        
for (let i = 0; i < programmerOutput.length; i++) {
totalOutput += programmerOutput[i].linesOfCode;
}`,
        code2: `const programmerOutput = [
{
  name: 'Uncle Bobby',
  linesOfCode: 500
}, {
  name: 'Suzie Q',
  linesOfCode: 1500
}, {
  name: 'Jimmy Gosling',
  linesOfCode: 150
}, {
  name: 'Gracie Hopper',
  linesOfCode: 1000
}
];
      
const INITIAL_VALUE = 0;
      
const totalOutput = programmerOutput
.map((programmer) => programmer.linesOfCode)
.reduce((acc, linesOfCode) => acc + linesOfCoINITIAL_VALUE);
}`
      },
      {
        id: '11',
        name: 'Encapsular los condicionales',
        description:
          "Prefiere encapsular condicionales complejos en funciones con nombres descriptivos. En el ejemplo mal hecho, se presenta un condicional que verifica el estado de la máquina de estado 'fsm' y si 'listNode' está vacío. En cambio, el ejemplo bien hecho encapsula esta lógica en la función 'shouldShowSpinner', proporcionando un nombre claro para la condición. Esto mejora la legibilidad del código y facilita su reutilización.",
        language: 'javascript',
        code1: `function shouldShowSpinner(fsm, listNode) {
return fsm.state === 'fetching' && isEmpty(listNode);
}`,
        code2: `if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
// ...
}`
      },
      {
        id: '12',
        name: 'Evitar condicionales negativos',
        description:
          "Evita el uso de condicionales negativos para mejorar la claridad del código. En el ejemplo mal hecho, se define una función 'isDOMNodeNotPresent' que verifica si el nodo no está presente, lo que resulta en un condicional negativo en su uso. En cambio, el ejemplo bien hecho utiliza una función 'isDOMNodePresent' que verifica la presencia del nodo, permitiendo un condicional afirmativo, lo que hace el código más fácil de entender.",
        language: 'javascript',
        code1: `function isDOMNodePresent(node) {
// ...
}`,
        code2: `if (isDOMNodePresent(node)) {
// ...
}`
      },
      {
        id: '13',
        name: 'Evitar condicionales',
        description:
          "Evita el uso excesivo de declaraciones 'if' en clases o funciones para mejorar la legibilidad y mantener el principio de que cada función debe hacer una sola cosa. En el ejemplo mal hecho, la función 'getCruisingAltitude' de la clase 'Airplane' utiliza una declaración 'switch' basada en el tipo de avión, haciendo que la función realice múltiples tareas. En cambio, el ejemplo bien hecho utiliza herencia y clases especializadas ('Boeing777', 'AirForceOne', 'Cessna') para encapsular el comportamiento específico de cada tipo de avión, eliminando la necesidad de declaraciones condicionales dentro de la función principal.",
        language: 'javascript',
        code1: `class Airplane {
// ...
getCruisingAltitude() {
  switch (this.type) {
    case '777':
      return this.getMaxAltitude() - this.getPassengerCount();
    case 'Air Force One':
      return this.getMaxAltitude();
    case 'Cessna':
      return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
}`,
        code2: `class Airplane {
// ...
}
      
class Boeing777 extends Airplane {
// ...
getCruisingAltitude() {
  return this.getMaxAltitude() - this.getPassengerCount();
}
}
      
class AirForceOne extends Airplane {
// ...
getCruisingAltitude() {
  return this.getMaxAltitude();
}
}
      
class Cessna extends Airplane {
// ...
getCruisingAltitude() {
  return this.getMaxAltitude() - this.getFuelExpendi();
}
}`
      },
      {
        id: '14',
        name: 'Evitar comprobación de tipos (parte 1)',
        description:
          "En un lenguaje no tipado como JavaScript, evita las comprobaciones de tipos dentro de funciones para mejorar la flexibilidad y simplicidad del código. En el ejemplo mal hecho, la función 'travelToTexas' realiza comprobaciones de tipos utilizando 'instanceof' para distintos tipos de vehículos ('Bicycle' y 'Car'). En cambio, el ejemplo bien hecho utiliza una API consistente y la función 'move' en el objeto 'vehicle', permitiendo que cualquier tipo de vehículo se mueva de manera coherente sin necesidad de comprobaciones de tipos.",
        language: 'javascript',
        code1: `function travelToTexas(vehicle) {
if (vehicle instanceof Bicycle) {
  vehicle.pedal(this.currentLocation, new Location('texas'));
} else if (vehicle instanceof Car) {
  vehicle.drive(this.currentLocation, new Location('texas'));
}
}`,
        code2: `function travelToTexas(vehicle) {
vehicle.move(this.currentLocation, new Location('texas'));
}`
      },
      {
        id: '15',
        name: 'Evitar comprobación de tipos (parte 2)',
        description:
          "Cuando trabajas con valores primitivos básicos y no puedes utilizar polimorfismo, considera el uso de TypeScript en lugar de realizar comprobaciones de tipos verbosas en JavaScript. TypeScript proporciona tipos estáticos sobre la sintaxis estándar de JavaScript, mejorando la legibilidad y reduciendo la necesidad de comprobaciones de tipos manuales. El ejemplo mal hecho realiza comprobaciones de tipos para 'number' y 'string' antes de realizar la operación de combinación. En cambio, el ejemplo bien hecho asume la flexibilidad de JavaScript y realiza la operación sin comprobaciones de tipos manuales.",
        language: 'javascript',
        code1: `function combine(val1, val2) {
if (typeof val1 === 'number' && typeof val2 === 'number' ||
    typeof val1 === 'string' && typeof val2 === 'string') {
  return val1 + val2;
}
        
throw new Error('Must be of type String or Number');
}`,
        code2: `function combine(val1, val2) {
return val1 + val2;
}`
      },
      {
        id: '16',
        name: 'No optimices demasiado',
        description:
          "Evita optimizar en exceso, ya que los navegadores modernos realizan muchas optimizaciones automáticamente. No gastes tiempo en optimizaciones prematuras. En el ejemplo mal hecho, se almacena la longitud de la lista en una variable, preocupándose por el rendimiento en navegadores antiguos. En cambio, el ejemplo bien hecho confía en la optimización interna de los navegadores modernos y utiliza la propiedad 'length' directamente en el bucle for.",
        language: 'javascript',
        code1: `for (let i = 0, len = list.length; i < len; i++) {
// ...
}`,
        code2: `for (let i = 0; i < list.length; i++) {
// ...
}`
      },
      {
        id: '17',
        name: 'Eliminar el código muerto',
        description:
          "Elimina el código muerto, que es tan perjudicial como el código duplicado. Si no se usa, no hay razón para mantenerlo. En el ejemplo mal hecho, se mantiene una función 'oldRequestModule' que ya no se utiliza. En cambio, el ejemplo bien hecho elimina el código muerto y retiene solo la función 'newRequestModule' que está en uso.",
        language: 'javascript',
        code1: `function oldRequestModule(url) {
// ...
}
        
function newRequestModule(url) {
// ...
}
        
const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');`,
        code2: `function newRequestModule(url) {
// ...
}
      
const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');`
      }
    ],
}

export default FunctionCleanCode