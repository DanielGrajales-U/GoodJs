import me from '../../public/images/Daniel Grajales.jpeg'
import anderson from '../../public/images/Anderson.png'
import florin from '../../public/images/Florin Pop.jpg'
import { HomeContent, ImgLink, SubtitleHome, SectionHome } from './Styles'


export default function Home() {
  return (
    <HomeContent>
      <SectionHome>
        <SubtitleHome>Creado por</SubtitleHome>
        <a href='https://daniel-grajales.netlify.app/' target='.blank'>
          <ImgLink src={me}/>
        </a>
      </SectionHome>
      <SectionHome>
        <SubtitleHome>Creditos</SubtitleHome>
        <a href='https://github.com/andersontr15/clean-code-javascript-es?tab=readme-ov-file#contenido' target='.blank'>
          <ImgLink src={anderson}/>
        </a>
        <a href='https://github.com/florinpop17/app-ideas' target='.blank'>
          <ImgLink src={florin}/>
        </a>
      </SectionHome>
    </HomeContent>
  )
}
