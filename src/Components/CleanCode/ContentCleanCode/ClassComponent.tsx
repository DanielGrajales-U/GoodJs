import ClassCleanCode from "../../../Mock/CleanCode/Class"
import ListPractices from "../ListPractices"

export default function ClassComponent() {
  return (
    <ListPractices type={ClassCleanCode.type} list={ClassCleanCode.practices}/>
  )
}
