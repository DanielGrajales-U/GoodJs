//icons
import variablesPng from '../../../public/icons/variables.png'
import functionPng from '../../../public/icons/function.png'
import objectPng from '../../../public/icons/objects.png'
import pooPng from '../../../public/icons/class.png'
import solidPng from '../../../public/icons/Solid.png'
import { CleanCodeProps } from './Interfaces'

const cleanCodeData: CleanCodeProps = {
  description:
    'El Clean Code, o código limpio, es una filosofía en desarrollo de software que enfatiza la escritura de código de manera clara, simple y legible. Aunque puede parecer una práctica trivial, mantener un código limpio es esencial para diversos aspectos del desarrollo de software. Algunas de las razones fundamentales para abogar por el Clean Code incluyen Legibilidad y Mantenibilidad, Colaboración Efectiva, Reducción de Errores, Agilidad y Flexibilidad, Facilita el Debugging entre muchas otras ventajas.',
  description2:
    'En el universo de JavaScript, adoptar Clean Code se vuelve crucial. La naturaleza dinámica y asincrónica del lenguaje demanda claridad en el código. En un entorno donde frameworks como React y Vue.js son omnipresentes, el Clean Code no solo es deseable, sino esencial para integraciones efectivas.',
  links: [
    {
      id: "1",
      title: "Variables",
      link: 'variables',
      img: variablesPng,
      description: "En JavaScript, el uso de nombres descriptivos con let o const es esencial para mantener un alcance bien definido. Evitar abreviaturas ambiguas en la nomenclatura contribuye significativamente a mejorar la legibilidad y comprensión del código."
    },
    {
      id: "2",
      title: "Funciones",
      link: 'funciones',
      img: functionPng,
      description: "La creación de funciones específicas y claras es fundamental. Utilizar nombres descriptivos para facilitar la comprensión y evitar la duplicación de código asegura una base sólida y mantenible para el desarrollo."
    },
    {
      id: "3",
      title: "Objetos y estructuras de datos",
      link: 'objetos',
      img: objectPng,
      description: "En el manejo de objetos, adoptar la convención camelCase y seleccionar estructuras de datos adecuadas son prácticas esenciales. Evitar manipulaciones directas asegura la coherencia y estabilidad del código a lo largo del tiempo."
    },
    {
      id: "4",
      title: "Clases",
      link: 'clases',
      img: pooPng,
      description: "Cuando se trabaja con clases en JavaScript, es crucial seguir UpperCamelCase para el nombre de la clase y adherirse a principios de modularidad y coherencia en el diseño. Esto no solo facilita el mantenimiento sino que también mejora la comprensión del código."
    },
    {
      id: "5",
      title: "SOLID",
      link: 'solid',
      img: solidPng,
      description: "Aplicar los principios SOLID es esencial para lograr un código flexible y mantenible. Enfocarse en la responsabilidad única, extensibilidad, sustituibilidad, segregación de interfaces e inversión de dependencia establece las bases para un desarrollo robusto y sostenible."
    }
  ]
};

export default cleanCodeData;
