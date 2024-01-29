import { DetailsProps } from '..'
import videogame from '../../../../public/images/Apps/game.png'

const VideoGameData: DetailsProps = {
    title: "Video juego",
    img: videogame,
    descriptionRequirement: "En este proyecto, pondrás a prueba tus habilidades de animación al crear un juego de carreras de insectos. Los usuarios pueden personalizar el juego eligiendo iconos de insectos, asignando nombres, seleccionando la velocidad y apostando por el posible ganador. La velocidad de cada insecto se ajusta aleatoriamente antes de la carrera, creando un desafío emocionante.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden ver un panel de entrada con controles para configurar la interfaz y la operación del juego."
        },
        {
            id: "2",
            description: "Una pista de carreras con cuatro carriles horizontales para que los insectos viajen."
        },
        {
            id: "3",
            description: "Un botón de inicio y botones de radio asociados a cada carril para que el usuario seleccione un posible ganador."
        },
        {
            id: "4",
            description: "Controles de juego que incluyen números de carril, iconos de insectos, nombres y una selección de velocidad."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Métricas de Carreras: Los usuarios pueden ver métricas de carrera para cada insecto, mostrando el número de carreras, victorias y derrotas."
        },
        {
            id: "2",
            description: "Animaciones Ganadoras: El insecto ganador rebota al ganar una carrera."
        },
        {
            id: "3",
            description: "Animaciones Perdedoras: Los insectos perdedores se voltean boca arriba al perder una carrera."
        },
        {
            id: "4",
            description: "Efectos de Sonido: Reproducción de sonidos únicos al inicio y al final de la carrera."
        }
    ],
    examples: [
        {
            name: "Arcade game",
            url: "https://jdmedlock.github.io/arcadegame/"
        },

    ]
}

export default VideoGameData