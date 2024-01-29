import { DetailsProps } from '..'
import moviegalery from '../../../../public/images/Apps/moviegalery.png'

const MovieGaleryData: DetailsProps = {
    title: "Galeria de peliculas",
    img: moviegalery,
    descriptionRequirement: "La aplicación Movie Database es tu compañera perfecta para descubrir tu próxima película. Proporciona estadísticas útiles, reseñas, calificaciones y detalles sobre cada película, permitiendo a los usuarios tomar decisiones informadas sobre qué ver a continuación. La aplicación utiliza una API de películas, como Imdb o MovieDB, para obtener información precisa y actualizada.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden ver todas las películas más recientes en la página principal."
        },
        {
            id: "2",
            description: "Pueden desplazarse hacia abajo para ver todas las demás películas ordenadas por fecha de lanzamiento."
        },
        {
            id: "3",
            description: "Pueden hacer clic en cualquier película para ir a su propia página separada."
        },
        {
            id: "4",
            description: "En la página individual de cada película, los usuarios pueden ver detalles como calificaciones, información sobre la película y actores presentes."
        }
    ],
    characteristics:[
        {
            id: "1",
            description: "Creación de Cuenta: Los usuarios pueden crear una cuenta para personalizar su experiencia y acceder a funciones adicionales."
        },
        {
            id: "2",
            description: "Lista de Reproducción Personalizada: La capacidad de crear una lista de reproducción personalizada permite a los usuarios planificar y organizar las películas que desean ver."
        },
        {
            id: "3",
            description: "Reseñas de Películas: Los usuarios pueden compartir sus opiniones mediante la opción de revisar películas, enriqueciendo la experiencia de la comunidad cinéfila."
        }
    ],
    examples: [
        {
            name: "Movie Database App w/ React by Oliver Gomes",
            url: "https://phobic-heat.surge.sh/"
        },
        {
            name: "Movie Browser App w/ React&Redux&Bootstrap by Nataliia Pylypenko",
            url: "https://api-cinema-10d15.firebaseapp.com/"
        }

    ]
}

export default MovieGaleryData