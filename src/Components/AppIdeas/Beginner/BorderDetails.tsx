import BorderPreviewData from "../../../Mock/AppIdeas/Beginner/BorderData"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,characteristics,descriptionRequirement} = BorderPreviewData

export default function BorderDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={characteristics} examples={examples}/>
    </StylesContent>
  )
}
