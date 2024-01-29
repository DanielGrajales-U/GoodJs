import { MemoryCardData } from "../../../Mock/AppIdeas"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,characteristics,descriptionRequirement} = MemoryCardData

export default function MemoryCardDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={characteristics} examples={examples}/>
    </StylesContent>
  )
}
