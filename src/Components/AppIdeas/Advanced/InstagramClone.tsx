import InstagramCloneData from "../../../Mock/AppIdeas/Advanced/InstagramClone"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,chracteristics,descriptionRequirement} = InstagramCloneData

export default function InstagramCloneDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={chracteristics} examples={examples}/>
    </StylesContent>
  )
}
