import InstagramCloneData from "../../../Mock/AppIdeas/Advanced/InstagramClone"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,characteristics,descriptionRequirement} = InstagramCloneData

export default function InstagramCloneDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={characteristics} examples={examples}/>
    </StylesContent>
  )
}
