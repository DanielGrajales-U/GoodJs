import { DetailsProps } from './../Interface';
import calculator from '../../../../public/images/Apps/Calculator.png'

const CalculatorData: DetailsProps = {
    title: "Calculadora",
    img: calculator,
    descriptionRequirement: "La 'Calculadora' es una aplicación que va más allá de ser una herramienta útil, también representa una excelente oportunidad para comprender la interfaz de usuario y el procesamiento de eventos en una aplicación. En este proyecto, crearás una calculadora que admita cálculos aritméticos básicos con números enteros. La estilización de la calculadora queda a tu imaginación, ¡así que sé creativo! También puede ser útil experimentar con la aplicación de calculadora en tu dispositivo móvil para comprender mejor la funcionalidad básica y los casos extremos.",
    requirements:[
        {
            id: "1",
            description: "La aplicación debe mostrar un visor que indique el número actual ingresado o el resultado de la última operación."
        },
        {
            id: "2",
            description: "Debe haber un teclado numérico que contenga botones para los dígitos del 0 al 9, operaciones como '+', '-', '/', y '=', un botón 'C' (para borrar), y un botón 'AC' (para borrar todo)."
        },
        {
            id: "3",
            description: "Los usuarios pueden ingresar números como secuencias de hasta 8 dígitos haciendo clic en los botones del teclado numérico. La entrada de más de 8 dígitos se ignorará."
        },
        {
            id: "4",
            description: "Los usuarios pueden hacer clic en un botón de operación para mostrar el resultado de esa operación en: El resultado de la operación anterior y el último número ingresado, O Los dos últimos números ingresados, O El último número ingresado."
        },
        {
            id: "5",
            description: "Los usuarios pueden hacer clic en el botón 'C' para borrar el último número o la última operación. Si la última entrada del usuario fue una operación, la pantalla se actualizará al valor que la precedió."
        },
        {
            id: "6",
            description: "Los usuarios pueden hacer clic en el botón 'AC' para borrar todas las áreas de trabajo internas y establecer la pantalla en 0."
        },
        {
            id: "7",
            description: "La aplicación debe mostrar 'ERR' si alguna operación superaría el límite de 8 dígitos."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Cambio de Signo: Los usuarios pueden hacer clic en un botón '+/-' para cambiar el signo del número que se muestra actualmente."
        },
        {
            id: "2",
            description: "Punto Decimal: Se incluye un botón ('.') en el teclado numérico para permitir la entrada de números decimales con hasta 3 lugares decimales y realizar operaciones con el máximo número de decimales ingresados para un número."
        },
    ],
    examples: [
        {
            name: "Neumorphic Calc",
            url: "https://barhouum7.github.io/JS-Neumorphic-Calc.github.io/"
        },
        {
            name: "Javascript iOS Style Calculator",
            url: "https://codepen.io/ssmkhrj/full/jOWBQqO"
        },
        {
            name: "React calculator",
            url: "https://codepen.io/mjijackson/pen/xOzyGX"
        }
    ]
}

export default CalculatorData