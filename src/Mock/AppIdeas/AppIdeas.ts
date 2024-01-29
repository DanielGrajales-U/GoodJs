import Beginner from "./Beginner/Beginner";
import Middle from "./Middle/Middle"
import Advanced  from "./Advanced/Advanced";
import { AppIdeaProps } from "./Interface";


const AppIdeasData: AppIdeaProps = {
    description:
      'Bienvenido a la sección de Ideas de Aplicaciones. Aquí, te animamos a elevar la calidad de tus proyectos en lugar de simplemente aumentar la cantidad. Añadir valor a tu repositorio es clave, y las siguientes sugerencias son solo el comienzo. Estas ideas están diseñadas para inspirarte, y con el tiempo, seguiré agregando más para que tu colección siga creciendo. ¡Atrévete a destacar y a construir proyectos que reflejen tu destreza en JavaScript Vanilla!',
    levels: [
        {
            title: 'Princiante',
            proyects: Beginner
        },
        {
            title: 'Intermedio',
            proyects: Middle
        },
        {
            title: 'Avanzado',
            proyects: Advanced
        },
    ]
  };
  
  export default AppIdeasData;