const VariablesCleanCode = {
    type: 'Variables',
    practices: [
      {
        id: '1',
        name: 'Utiliza nombres significativos y pronunciables para las variables',

        description:
          'En lugar de optar por nombres cortos o crípticos, esta práctica enfatiza la importancia de elegir nombres que reflejen claramente el propósito y la funcionalidad de las variables en el código.',

        language: 'javascript',

        code1: "const yyyymmdstr = moment().format('YYYY/MM/DD'); ",

        code2: "const fechaActual = moment().format('YYYY/MM/DD');",
      },
      {
        id: '2',
        name: 'Utiliza el vocabulario igual para las variables del mismo tipo',

        description:
          ' Al adherirse a esta práctica, se establece una convención que facilita la lectura y comprensión del código, tanto para el propio desarrollador como para otros colaboradores en el proyecto.',

        language: 'javascript',

        code1: `conseguirInfoUsuario();
conseguirDataDelCliente();
conseguirRecordDelCliente();`,

        code2: 'conseguirUsuario();',
      },
      {
        id: '3',
        name: 'Utiliza nombres buscables',

        description:
          'Al asignar nombres descriptivos a variables y constantes, se elimina la ambigüedad y se facilita la identificación de su propósito y función.',

        language: 'javascript',

        code1: `// Para qué rayos sirve 86400000? 
setTimeout(hastaLaInfinidadYMasAlla, 86400000);
        `,

        code2: `// Decláralos como variables globales de 'const'.
const MILISEGUNDOS_EN_UN_DIA = 8640000;
        
setTimeout(hastaLaInfinidadYMasAlla, MILISEGUNDOS_EN_UN_DIA);
        `,
      },
      {
        id: '4',
        name: 'Utiliza variables explicativas',

        description:
          'En lugar de depender directamente de expresiones complejas o llamadas a métodos, asignar resultados a variables con nombres descriptivos mejora significativamente la legibilidad y la mantenibilidad del código.',

        language: 'javascript',

        code1: `const direccion = 'One Infinite Loop, Cupertino 95014';
const codigoPostalRegex = ^[^,\\\\]+[,\\\\\\s]+(.+?)\\s*(\\d{5})?$/;
saveCityZipCode(direccion.match(codigoPostalRegex)[1], direccion.match(codigoPostalRegex)[2]);`,

        code2: `const direccion = 'One Infinite Loop, Cupertino 95014';
const codigoPostalRegex =^[^,\\\\]+[,\\\\\\s]+(.+?)\\s*(\\d{5})?$/;
const [, ciudad, codigoPostal] = direccion.match(codigoPostalRegex) || [];
guardarcodigoPostal(ciudad, codigoPostal);`,
      },
      {
        id: '5',
        name: 'Evitar el mapeo mental',

        description:
          "En lugar de utilizar nombres de variables crípticos o abreviaciones que requieran que el lector realice un 'mapeo mental' para entender su significado, se promueve el uso de nombres explícitos y descriptivos.",

        language: 'javascript',

        code1: `const ubicaciones = ['Austin', 'New York', 'San Francisco'];
ubicaciones.forEach((u) => {
hazUnaCosa();
hasMasCosas()
// ...
// ...
// ...
// Espera, para qué existe la 'u'?
ejecuta(u);
});`,

        code2: `const ubicaciones = ['Austin', 'New York', 'San Francisco'];
ubicaciones.forEach((ubicacion) => {
hazUnaCosa();
hazMasCosas()
// ...
// ...
// ...
ejecuta(ubicacion);
});`,
      },
      {
        id: '6',
        name: 'No incluyas contexto innecesario',

        description:
          'Si el nombre de la clase u objeto ya proporciona información clara sobre el contexto, no es necesario repetir esa información en el nombre de las variables internas.',

        language: 'javascript',

        code1: `const Coche = {
cocheMarca: 'Honda',
cocheModelo: 'Accord',
cocheColor: 'Blue'
};
        
function pintarCoche(coche) {
coche.cocheColor = 'Red';
}`,

        code2: `const Coche = {
marca: 'Honda',
modelo: 'Accord',
color: 'Blue'
};
        
function pintarCoche(coche) {
coche.color = 'Red';
}`,
      },
      {
        id: '7',
        name: 'Utiliza argumentos predefinidos en vez de utilizar condicionales',

        description:
          'En lugar de depender de condicionales para asignar valores predeterminados a los argumentos, puedes aprovechar la capacidad de JavaScript para definir valores predeterminados directamente en la firma de la función.',

        language: 'javascript',

        code1: `function crearMicroCerveceria(nombre) {
const nombreDelMicroCerveceria = nombre || 'Hipster Brew Co.';
// ...
}
        `,

        code2: `function crearMicroCerveceria(nombreDelMicroCerveceria = 'Hipster Brew Co.') {
// ...
}
        `,
      },
    ],
  }

export default VariablesCleanCode