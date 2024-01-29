import moviegalery from '../../../../public/images/Apps/moviegalery.png'
import clondeinstagram from '../../../../public/images/Apps/instagram clone.webp'
import chat from '../../../../public/images/Apps/chat.png'
import videojuego from '../../../../public/images/Apps/game.png'
import { AppProps } from '..'

const Advanced: AppProps[] = [
    {
        id: "1",
        img: moviegalery,
        link: "galeriadepeliculas",
        title: "Galeria de peliculas",
        description: "Encuentra tu próxima película o crea tu lista de películas por ver con esta aplicación. Incluye reseñas, calificaciones, actores y todo lo que necesitas saber sobre cada película.",
    },
    {
        id: "2",
        img: clondeinstagram,
        link: "clondeinstagram",
        title: "Clon de Instagram",
        description: "Crea tu propio clon de la aplicación Instagram de Facebook. Regístrate, inicia sesión, crea publicaciones, sigue a otros usuarios y visualiza las publicaciones de quienes sigues. Utiliza un enfoque de pila completa como MEAN, MERN o VENM para almacenar imágenes en el servidor y mostrarlas al cliente.",
    },
    {
        id: "3",
        img: chat,
        link: "chat",
        title: "Chat",
        description: "Crea una interfaz de chat en tiempo real donde múltiples usuarios pueden interactuar enviando mensajes. Comienza con un enfoque en construir la interfaz de chat, y luego añade funcionalidades en tiempo real como características adicionales.",
    },
    {
        id: "4",
        img: videojuego,
        link: "videojuego",
        title: "Videojuego",
        description: "Demuestra tus habilidades de animación creando un juego que permite a los usuarios competir con insectos mientras intentan adivinar al ganador. Personaliza el juego con controles que incluyen iconos de insectos, nombres, opciones de velocidad y selección del posible ganador.",
    },
]

export default Advanced