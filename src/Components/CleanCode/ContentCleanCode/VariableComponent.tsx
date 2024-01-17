import VariablesCleanCode from "../../../Mock/CleanCode/Variables";
import ListPractices from "../ListPractices";

export default function VariablesComponent() {
  return (
    <ListPractices type={VariablesCleanCode.type} list={VariablesCleanCode.practices}/>
  )
}
