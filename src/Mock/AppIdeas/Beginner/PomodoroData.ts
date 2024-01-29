import { DetailsProps } from './../Interface';
import pomodoro from '../../../../public/images/Apps/Pomodoro.png'
const PomodoroData: DetailsProps = {
    title: "Pomodoro",
    img: pomodoro,
    descriptionRequirement: "La Técnica Pomodoro, desarrollada por Francesco Cirillo a fines de la década de 1980, es un método de gestión del tiempo. La técnica utiliza un temporizador para dividir el trabajo en intervalos, tradicionalmente de 25 minutos, seguidos por cortos descansos de 5 minutos. Esta aplicación Pomodoro ha sido diseñada para ayudarte a implementar esta técnica efectivamente en tu rutina diaria.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden visualizar un temporizador para 25 minutos, que representa la sesión de trabajo."
        },
        {
            id: "2",
            description: "Después de que la sesión de trabajo concluye, los usuarios pueden ver un temporizador de 5 minutos para la sesión de descanso."
        },
        {
            id: "3",
            description: "Los usuarios pueden iniciar/pausar, detener y reiniciar los temporizadores."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Alerta de Fin de Sesión: Los usuarios pueden escuchar un sonido cuando el temporizador llega a 00:00, indicando que la sesión ha terminado."
        },
        {
            id: "2",
            description: "Personalización del Tiempo: Los usuarios pueden cambiar y personalizar la duración de ambas sesiones antes de comenzar."
        },
        {
            id: "3",
            description: "Sesión de Descanso Prolongado: Los usuarios tienen la opción de configurar una sesión de descanso larga de 10 minutos, la cual se activará después de cada cuarta sesión de descanso, brindando un descanso más prolongado para recargar energías."
        }
    ],
    examples: [
        {
            name: "Joe Weaver's example",
            url: "https://codepen.io/freeCodeCamp/full/XpKrrW"
        },
        {
            name: "A desktop pomodoro app for menubar/tray.",
            url: "https://github.com/amitmerchant1990/pomolectron"
        },
        {
            name: "Sheri Richardson's example",
            url: "https://srd-pomodoro-timer.netlify.app/"
        }
    ]
}

export default PomodoroData