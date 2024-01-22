import extentiontheme from '../../../../public/images/Apps/extention-theme.png'

const ExtentionThemeData = {
    title: "Extencion de tema para Chrome",
    img: extentiontheme,
    descriptionRequirement: "La extensión Chrome Theme te permite construir tu propio tema personalizado para Chrome. Además, incorpora una función de luz nocturna (filtro de luz azul) que se activa automáticamente durante la noche, reduciendo la fatiga visual mientras programas hasta tarde o disfrutas de tus series favoritas.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden crear un tema según sus preferencias de color personales."
        },
        {
            id: "2",
            description: "Beneficia especialmente a las personas con daltonismo al permitirles adaptar la extensión a sus necesidades."
        },
        {
            id: "3",
            description: "Pueden instalar y configurar la extensión como el tema predeterminado."
        },
    ],
    chracteristics:[
        {
            id: "1",
            description: "Despliegue en la Tienda de Chrome: Los usuarios pueden desplegar la extensión en la tienda de Chrome para que otros la descarguen y disfruten."
        },
        {
            id: "2",
            description: "Botón de Alternancia para Luz Nocturna: Agrega un botón de alternancia para permitir a los usuarios controlar manualmente la función de luz nocturna."
        },
        {
            id: "3",
            description: "Compatibilidad con Otros Navegadores: Expande la extensión para que sea compatible con otros navegadores como Firefox, proporcionando una experiencia personalizada más allá de Chrome."
        }
    ],
    examples: [
        {
            name: "chrome-developer-edition-dark",
            url: "https://github.com/KeenRivals/chrome-developer-edition-dark"
        },

    ]
}

export default ExtentionThemeData