import SolidCleanCode from "../../../Mock/CleanCode/SOLID"
import ListPractices from "../ListPractices"

export default function SolidComponents() {
  return (
    <ListPractices type={SolidCleanCode.type} list={SolidCleanCode.practices}/>
  )
}
