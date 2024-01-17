import ObjectsCleanCode from "../../../Mock/CleanCode/Objetos"
import ListPractices from "../ListPractices"

export default function ObjectComponent() {
  return (
    <ListPractices type={ObjectsCleanCode.type} list={ObjectsCleanCode.practices}/>
  )
}
