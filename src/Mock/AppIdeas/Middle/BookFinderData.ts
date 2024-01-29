import bookfinder from '../../../../public/images/Apps/book-finder.png'
import { DetailsProps } from '../Interface'

const BookFinderData: DetailsProps = {
    title: "Buscador de libros",
    img: bookfinder,
    descriptionRequirement: "La aplicación Book Finder permite a los usuarios buscar libros al ingresar consultas, como título o autor. Al enviar la consulta, se realiza una llamada a una API que devuelve un conjunto de libros con datos detallados, como título, autor, fecha de publicación y una imagen de la portada. La lista de libros resultantes se muestra en la página de manera clara y accesible.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden ingresar consultas de búsqueda en un campo de entrada."
        },
        {
            id: "2",
            description: "Al enviar la consulta, se realiza una llamada a la API para obtener un array de libros con datos detallados."
        },
        {
            id: "3",
            description: "Se muestra una lista de libros en la página, con información como título, autor y fecha de publicación."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Para cada libro en la lista, se agrega un enlace que dirige al usuario a un sitio externo con más información sobre el libro."
        },
        {
            id: "2",
            description: "Se implementa un diseño receptivo para mejorar la experiencia del usuario en diferentes dispositivos."
        },
        {
            id: "3",
            description: "Se añaden animaciones de carga para mejorar la estética y proporcionar retroalimentación visual durante las búsquedas."
        }
    ],
    examples: [
        {
            name: "Book Finder",
            url: "https://book-finder-by-deyl.netlify.app/"
        },
        {
            name: "BookSure",
            url: "https://booksure.netlify.app/"
        },

    ]
}

export default BookFinderData