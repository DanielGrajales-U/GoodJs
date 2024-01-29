import PomodoroData from "../../../Mock/AppIdeas/Beginner/PomodoroData"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,characteristics,descriptionRequirement} = PomodoroData

export default function PomodoroDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={characteristics} examples={examples}/>
    </StylesContent>
  )
}
