import borderPreview from '../../../../public/images/Apps/border-preview.png'
import { DetailsProps } from '../Interface'

const BorderPreviewData: DetailsProps = {
    title: "Previsualizador de Bordes",
    img: borderPreview,
    descriptionRequirement: "El 'Previsualizador de Bordes' es una aplicación interactiva desarrollada en JavaScript Vanilla. Esta herramienta permite a los usuarios explorar la propiedad border-radius, visualizando instantáneamente cómo afecta la forma de un cuadro al ajustar los valores de las esquinas. Desde formas básicas hasta diseños más complejos, esta aplicación brinda una experiencia intuitiva y creativa para los desarrolladores que desean perfeccionar sus habilidades en CSS.",
    requirements:[
        {
            id: "1",
            description: "La aplicación debe mostrar un cuadro con la propiedad border-radius aplicada."
        },
        {
            id: "2",
            description: "Se deben proporcionar controles para cambiar los 4 valores de border-radius (superior-izquierda, superior-derecha, inferior-izquierda, inferior-derecha)."
        },
        {
            id: "3",
            description: "Debe haber una función que permita copiar el CSS resultante al portapapeles del usuario."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Interfaz Intuitiva: Diseño fácil de usar para que los usuarios puedan interactuar sin dificultad."
        },
        {
            id: "2",
            description: "Copiado al Portapapeles: Funcionalidad que facilita a los usuarios la implementación de los estilos generados en sus propios proyectos."
        },
        {
            id: "3",
            description: "Exploración Avanzada: Característica adicional para cambiar los 8 valores posibles de border-radius, permitiendo la creación de formas más elaboradas."
        },
        {
            id: "4",
            description: "Proyectos Personalizados: Incentiva a los desarrolladores a integrar esta herramienta en sus repositorios como parte de proyectos más amplios centrados en el diseño y la estilización en CSS."
        }
    ],
    examples: [
        {
            name: "Fancy Border Radius",
            url: "https://9elements.github.io/fancy-border-radius/"
        },
        {
            name: "Border Radius",
            url: "https://border-radius.com/"
        },
        {
            name: "Border Radius CSS Generator",
            url: "https://cssgenerator.org/border-radius-css-generator.html"
        },

    ]
}

export default BorderPreviewData