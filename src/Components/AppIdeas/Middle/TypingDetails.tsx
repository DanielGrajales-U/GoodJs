import { TypingPracticeData } from "../../../Mock/AppIdeas"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,chracteristics,descriptionRequirement} = TypingPracticeData

export default function TypingDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={chracteristics} examples={examples}/>
    </StylesContent>
  )
}
