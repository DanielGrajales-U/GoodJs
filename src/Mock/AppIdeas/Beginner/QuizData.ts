import quiz from '../../../../public/images/Apps/quiz.png'

const QuizData = {
    title: "Quiz App",
    img: quiz,
    descriptionRequirement: "La aplicación de Quiz te brinda la oportunidad de practicar y evaluar tus conocimientos al responder preguntas en un formato de cuestionario. Como desarrollador, puedes utilizar esta aplicación para evaluar las habilidades de codificación de otros desarrolladores, abarcando temas como HTML, CSS, JavaScript, Python, PHP, y más.",
    requirements:[
        {
            id: "1",
            description: "Los usuarios pueden iniciar el quiz presionando un botón."
        },
        {
            id: "2",
            description: "Se presenta una pregunta con 4 posibles respuestas."
        },
        {
            id: "3",
            description: "Después de seleccionar una respuesta, se muestra la siguiente pregunta al usuario. Este proceso se repite hasta que se completa el quiz. "
        },
        {
            id: "4",
            description: "Al finalizar, los usuarios pueden ver las siguientes estadísticas: Tiempo que tomó completar el quiz. Cantidad de respuestas correctas.Un mensaje que indica si aprobaron o no el quiz."
        },
    ],
    chracteristics:[
        {
            id: "1",
            description: "Compartir Resultados: Los usuarios pueden compartir los resultados de un quiz en redes sociales."
        },
        {
            id: "2",
            description: "Múltiples Quizzes: Agregar varios quizzes a la aplicación, permitiendo a los usuarios seleccionar cuál desean realizar."
        },
    ],
    examples: [
        {
            name: "Quiz app built with React",
            url: "https://web.archive.org/web/20221101033448/http://tranquil-beyond-43849.herokuapp.com/"
        },
        {
            name: "Quiz App",
            url: "https://codepen.io/FlorinPop17/full/qqYNgW"
        },
        {
            name: "Quiz Progressive Web App built with React",
            url: "https://github.com/SafdarJamal/quiz-app"
        }
    ]
}

export default QuizData