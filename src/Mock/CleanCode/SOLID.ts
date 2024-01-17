const SolidCleanCode = {
  type: 'SOLID',
  practices: [
    {
      id: '1',
      name: 'El principio único de responsabilidad (SRP)',
      description:
        'Aplica el principio SRP (Single Responsibility Principle) para garantizar que una clase tenga una única razón para cambiar. Evita sobrecargar una clase con múltiples responsabilidades, ya que esto puede complicar la comprensión y mantenimiento del código. En el ejemplo mal hecho, la clase UserSettings tiene la responsabilidad tanto de cambiar la configuración como de verificar credenciales. En cambio, el ejemplo bien hecho separa estas responsabilidades en dos clases distintas, UserSettings y UserAuth, siguiendo el principio SRP y mejorando la cohesión conceptual.',
      language: 'javascript',
      code1: `class UserSettings {
constructor(user) {
    this.user = user;
}
          
changeSettings(settings) {
    if (this.verifyCredentials()) {
    // ...
  }
}
          
verifyCredentials() {
    // ...
  }
}`,
      code2: `class UserAuth {
constructor(user) {
    this.user = user;
}
          
verifyCredentials() {
    // ...
  }
}
          
class UserSettings {
constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
}
          
changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
    // ...
    }
  }
}`,
    },
    {
      id: '2',
      name: 'Principio de abierto/cerrado (OCP)',
      description:
        'Aplica el principio OCP (Open/Closed Principle) para permitir la extensión sin modificar el código existente. En el ejemplo mal hecho, la clase HttpRequester necesita conocer los detalles internos de cada adaptador (ajaxAdapter y httpNodeAdapter) para realizar la solicitud. En cambio, el ejemplo bien hecho abstrae la lógica de solicitud en métodos específicos de cada adaptador (request), permitiendo que HttpRequester use cualquier adaptador sin necesidad de conocer sus detalles internos.',
      language: 'javascript',
      code1: `class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}
          
class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
}
          
class HttpRequester {
constructor(adapter) {
    this.adapter = adapter;
}
          
fetch(url) {
  if (this.adapter.name === 'ajaxAdapter') {
    return makeAjaxCall(url).then((response) => {
    // transforma la respuesta y la retorna
  });
  } else if (this.adapter.name === 'httpNodeAdapter') {
    return makeHttpCall(url).then((response) => {
    // transforma la respuesta y la retorna
  });
  }
  }
}
          
function makeAjaxCall(url) {
  // solicita y retorna la promesa
}
          
function makeHttpCall(url) {
  // solicita y retorna la promesa
}`,
      code2: `class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
          
  request(url) {
    // solicita y retorna la promesa
  }
}
          
class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
          
  request(url) {
    // solicita y retorna la promesa
  }
}
          
class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }
          
  fetch(url) {
    return this.adapter.request(url).then((response) => {
    // transforma la respuesta y retorna
    });
  }
}`,
    },
    {
        id: '3',
        name: 'Principio de sustitución de Liskov (LSP)',
        description:
          "Aplica el principio LSP (Liskov Substitution Principle) para garantizar que los objetos de un tipo base y sus subtipos puedan ser intercambiados sin perder propiedades deseables. En el ejemplo mal hecho, la clase Square hereda de Rectangle, pero viola el principio LSP al cambiar el comportamiento de setWidth y setHeight. Como resultado, la función renderLargeRectangles produce resultados incorrectos para Square. En cambio, el ejemplo bien hecho utiliza una relación de composición en lugar de herencia para modelar las clases Rectangle y Square, evitando así la violación del principio LSP.",
        language: 'javascript',
        code1: `class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }
      
  setColor(color) {
    // ...
  }
      
  render(area) {
    // ...
  }
      
  setWidth(width) {
    this.width = width;
  }
      
  setHeight(height) {
    this.height = height;
  }
      
  getArea() {
    return this.width * this.height;
  }
}
      
class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
      
  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}
      
function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // Mal retorna 25 al cuadrado. Deberia ser 20.
    rectangle.render(area);
 });
}
      
const rectangles = [new Rectangle(), new Rectang(), new Square()];
renderLargeRectangles(rectangles);`,
        code2: `class Shape {
  setColor(color) {
    // ...
  }
      
  render(area) {
    // ...
  }
}
      
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
      
  getArea() {
    return this.width * this.height;
  }
}
      
class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
      
  getArea() {
    return this.length * this.length;
  }
}
      
function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}
      
const shapes = [new Rectangle(4, 5), new Rectang(4, 5), new Square(5)];
renderLargeShapes(shapes);`
      },
      {
        id: '4',
        name: 'Principio de segregación en cuanto a los interfaces (ISP)',
        description:
          "Aunque JavaScript no tiene interfaces formales, el ISP (Interface Segregation Principle) sigue siendo relevante al evitar que los clientes dependan de interfaces que no necesitan. En el ejemplo mal hecho, la clase DOMTraverser tiene una configuración completa, incluida una animación, que puede no ser necesaria en muchos casos. El ejemplo bien hecho utiliza opciones dentro de la configuración, permitiendo que los clientes proporcionen solo lo que necesitan, evitando así la dependencia de interfaces innecesarias.",
        language: 'javascript',
        code1: `class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }
      
  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }
      
  traverse() {
    // ...
  }
}
      
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
    animationModule() {} // La mayoría de las veces, no necesitaremos animar al recorrer.
// ...
});`,
        code2: `class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }
      
  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }
      
  setupOptions() {
    if (this.options.animationModule) {
    // ...
    }
  }
      
  traverse() {
    // ...
  }
}
      
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {}
  }
});`
      },
      {
        id: '10',
        name: 'Principio de la inversión de las dependencias (DIP)',
        description:
          "El DIP establece que los módulos de alto nivel no deben depender de los módulos de bajo nivel, sino de abstracciones. Además, las abstracciones no deben depender de detalles, sino que los detalles deben depender de abstracciones. En JavaScript, donde no hay interfaces formales, las abstracciones son contratos implícitos. En el ejemplo mal hecho, InventoryTracker depende de la implementación específica de InventoryRequester, creando una dependencia innecesaria. El ejemplo bien hecho utiliza la inyección de dependencias para permitir la sustitución fácil de diferentes implementaciones de InventoryRequester.",
        language: 'javascript',
        code1: `class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }
      
  requestItem(item) {
    // ...
  }
}
      
class InventoryTracker {
  constructor(items) {
    this.items = items;
      
    // MAL HECHO: Hemos creado una dependencia en una implementación específica de solicitud.
    // Deberíamos hacer que requestItems dependa solo de un método de solicitud: request.
    this.requester = new InventoryRequester();
  }
      
  requestItems() {
    this.items.forEach((item) => {
    this.requester.requestItem(item);
    });
  }
}
      
const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();`,
        code2: `class InventoryTracker {
        constructor(items, requester) {
          this.items = items;
          this.requester = requester;
        }
      
        requestItems() {
          this.items.forEach((item) => {
            this.requester.requestItem(item);
          });
        }
      }
      
      class InventoryRequesterV1 {
        constructor() {
          this.REQ_METHODS = ['HTTP'];
        }
      
        requestItem(item) {
          // ...
        }
      }
      
      class InventoryRequesterV2 {
        constructor() {
          this.REQ_METHODS = ['WS'];
        }
      
        requestItem(item) {
          // ...
        }
      }
      
      
      // Al construir nuestras dependencias externamente e inyectarlas, podemos fácilmente
      // sustituir nuestro módulo de solicitud por uno nuevo y elegante que utilice WebSockets.
      const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
      inventoryTracker.requestItems();`
      }
      
  ],
};

export default SolidCleanCode;
