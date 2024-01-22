import cloneinstagram from '../../../../public/images/Apps/instagram clone.webp'

const InstagramCloneData = {
    title: "Clon de instagram",
    img: cloneinstagram,
    descriptionRequirement: "El clon de Instagram es una aplicación completa que replica las funciones esenciales de la famosa plataforma de redes sociales. Los usuarios pueden registrarse, iniciar sesión, crear publicaciones con imágenes almacenadas en el servidor y explorar las publicaciones de otros usuarios que siguen. El enfoque de pila completa (MEAN, MERN, VENM) garantiza una experiencia fluida y eficiente.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden registrarse proporcionando su nombre, correo electrónico/usuario y contraseña. Luego, pueden iniciar sesión utilizando sus credenciales."
        },
        {
            id: "2",
            description: "Pueden crear publicaciones y almacenar imágenes en el servidor, preferiblemente en una base de datos."
        },
        {
            id: "3",
            description: "Cada usuario tiene un perfil que muestra todas las imágenes que han subido."
        },
        {
            id: "4",
            description: "Pueden seguir a otros usuarios y ver las publicaciones de las personas que siguen."
        },
    ],
    chracteristics:[
        {
            id: "1",
            description: "Feed Global de Imágenes: Los usuarios pueden explorar un feed global de imágenes."
        },
        {
            id: "2",
            description: "Actualización Automática del Feed: El feed se actualiza automáticamente cuando se agrega una nueva publicación (puedes utilizar Web Sockets para esto)."
        },
        {
            id: "3",
            description: "Mensajería entre Usuarios: Funcionalidad para que los usuarios envíen mensajes entre sí."
        },
        {
            id: "4",
            description: "Creación de Historias para Seguidores: Los usuarios pueden crear historias visibles para sus seguidores."
        }
    ],
    examples: [
        {
            name: "Instagram",
            url: "https://www.instagram.com/"
        },

    ]
}

export default InstagramCloneData