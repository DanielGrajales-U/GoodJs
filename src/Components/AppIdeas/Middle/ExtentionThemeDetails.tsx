import { ExtentionThemeData } from "../../../Mock/AppIdeas"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,chracteristics,descriptionRequirement} = ExtentionThemeData

export default function ExtentionThemeDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={chracteristics} examples={examples}/>
    </StylesContent>
  )
}
