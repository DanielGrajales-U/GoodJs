import { MovieGaleryData } from "../../../Mock/AppIdeas"
import { StylesContent } from "../../Styles"
import DetailsApps from "../DetailsApps"

const {title,requirements,img,examples,characteristics,descriptionRequirement} = MovieGaleryData

export default function MovieGaleryDetails() {
  return (
    <StylesContent>
      <DetailsApps key={title} title={title} img={img} descriptionRequirement={descriptionRequirement} requirements={requirements} characteristics={characteristics} examples={examples}/>
    </StylesContent>
  )
}
