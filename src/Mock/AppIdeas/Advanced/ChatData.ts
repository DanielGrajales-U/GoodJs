import { DetailsProps } from '..'
import chat from '../../../../public/images/Apps/chat.png'

const ChatData: DetailsProps = {
    title: "Practica de mecanografia",
    img: chat,
    descriptionRequirement: "La aplicación de chat ofrece una interfaz en tiempo real donde los usuarios pueden interactuar mediante el intercambio de mensajes. Como Producto Mínimo Viable (MVP), el enfoque inicial se centra en construir la interfaz de chat, y las funciones en tiempo real se incorporarán en características adicionales.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios son recibidos con la solicitud de ingresar un nombre de usuario al visitar la aplicación de chat. Este nombre de usuario se almacenará en la aplicación."
        },
        {
            id: "2",
            description: "Pueden ver un campo de entrada donde pueden escribir un nuevo mensaje."
        },
        {
            id: "3",
            description: "Al presionar la tecla Enter o hacer clic en el botón de enviar, el texto se mostrará en el cuadro de chat junto con su nombre de usuario (por ejemplo, John Doe: ¡Hola Mundo!)."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Chat en Tiempo Real: Los mensajes son visibles para todos los usuarios en la aplicación de chat mediante el uso de WebSockets."
        },
        {
            id: "2",
            description: "Mensaje de Bienvenida para Nuevos Usuarios: Cuando un nuevo usuario se une al chat, se muestra un mensaje a todos los usuarios existentes."
        },
        {
            id: "3",
            description: "Persistencia de Mensajes: Los mensajes se guardan en una base de datos para su persistencia."
        }
    ],
    examples: [
        {
            name: "Chat",
            url: "https://github.com/dularish/Simple-TCP-Socket-based-Chat-App"
        },

    ]
}

export default ChatData