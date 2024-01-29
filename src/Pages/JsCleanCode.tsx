import CleanCode from "../Components/CleanCode/CleanCode";
import useSEO from "../Hooks/useSEO";


export default function JsCleanCode() {
  useSEO({
    title: 'Clean Code',
    description: 'Tips para mejorar tu codigo'
  })
  return (
    <CleanCode/>
  )
}
