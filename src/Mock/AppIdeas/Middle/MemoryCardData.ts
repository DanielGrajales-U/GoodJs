import { DetailsProps } from './../Interface';
import memorycard from '../../../../public/images/Apps/memory-card.png'

const MemoryCardData: DetailsProps = {
    title: "Esta con esta",
    img: memorycard,
    descriptionRequirement: "Card Memory Game ofrece una experiencia cautivadora al desafiar a los jugadores a descubrir parejas de cartas a través de clics estratégicos. Presenta un tablero de cartas de tamaño n x n, todas ocultas al principio. Al iniciar el juego mediante un clic en el botón correspondiente, se activa un temporizador, agregando un elemento de urgencia a la diversión.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden explorar un tablero de cartas ocultas, inicialmente dispuestas en un diseño n x n."
        },
        {
            id: "2",
            description: "Iniciar el juego mediante un clic en el botón desencadena el temporizador, intensificando la emoción."
        },
        {
            id: "3",
            description: "Al hacer clic en una carta, se revela la imagen debajo, permaneciendo visible hasta que se descubre una segunda carta."
        },
        {
            id: "4",
            description: "Las parejas coincidentes se eliminan del juego, mientras que las no coincidentes vuelven a su estado inicial."
        },
        {
            id: "5",
            description: "Al encontrar todas las parejas, un cuadro de diálogo felicita al jugador y muestra el tiempo empleado."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Niveles de Dificultad: Los jugadores pueden seleccionar entre distintos niveles (Fácil, Medio, Difícil), ajustando el tiempo disponible y/o el número de cartas para una experiencia personalizada."
        },
        {
            id: "2",
            description: "Estadísticas del Juego: Se proporciona un resumen de las estadísticas del juego, incluyendo el número de victorias/derrotas y el mejor tiempo registrado para cada nivel."
        }
    ],
    examples: [
        {
            name: "Flip - card memory game",
            url: "https://codepen.io/zerospree/full/bNWbvW"
        },
        {
            name: "Memory Game",
            url: "https://jdmedlock.github.io/memorygame/"
        },
        {
            name: "SMB3 Memory Card Game",
            url:"https://codepen.io/hexagoncircle/full/OXBJxV"
        }

    ]
}

export default MemoryCardData