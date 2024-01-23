import typing from '../../../../public/images/Apps/typing practice.png'

const TypingPracticeData = {
    title: "Practica de mecanografia",
    img: typing,
    descriptionRequirement: "La aplicación Typing Practice está diseñada para mejorar la velocidad y precisión de escritura de los desarrolladores. Presenta una palabra que debes escribir dentro de un intervalo de tiempo específico. Si la palabra se escribe incorrectamente, permanece en pantalla y el intervalo de tiempo permanece igual. Pero, si la palabra se escribe correctamente, se muestra una nueva palabra y el intervalo de tiempo se reduce ligeramente.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden ver el intervalo de tiempo para escribir palabras en la ventana de la aplicación."
        },
        {
            id: "2",
            description: "La puntuación se muestra con el número de intentos exitosos y el total de intentos."
        },
        {
            id: "3",
            description: "Pueden hacer clic en un botón 'Start Practice' para iniciar la sesión de práctica."
        },
        {
            id: "4",
            description: "Se muestra una palabra en una caja de texto."
        },
        {
            id: "5",
            description: "Los usuarios comienzan a escribir la palabra en un cuadro de entrada de texto."
        },
        {
            id: "6",
            description: "Las letras incorrectas parpadean y se borra el cuadro de entrada si se introduce una letra incorrecta."
        },
        {
            id: "7",
            description: "Aparece un mensaje indicando al usuario que lo intente de nuevo si se ingresa una letra incorrecta."
        }
    ],
    chracteristics:[
        {
            id: "1",
            description: "Tonos Audibles: Los usuarios pueden escuchar tonos audibles únicos para indicar cuando se muestra una nueva palabra, cuando una palabra se escribe correctamente o cuando se ingresa una letra incorrecta."
        },
        {
            id: "2",
            description: "Inicio de Sesión: Los usuarios pueden iniciar sesión en la aplicación para un seguimiento personalizado."
        },
        {
            id: "3",
            description: "Estadísticas de Rendimiento: Visualización de estadísticas acumulativas de rendimiento a lo largo de todas las sesiones de práctica."
        }
    ],
    examples: [
        {
            name: "Typing Practice",
            url: "https://www.keybr.com/"
        },

    ]
}

export default TypingPracticeData