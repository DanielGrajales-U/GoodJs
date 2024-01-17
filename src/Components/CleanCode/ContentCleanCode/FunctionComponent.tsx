
import FunctionCleanCode from "../../../Mock/CleanCode/Functions";
import ListPractices from "../ListPractices";

export default function FunctionComponent() {
  return (
    <ListPractices type={FunctionCleanCode.type} list={FunctionCleanCode.practices}/>
  )
}
