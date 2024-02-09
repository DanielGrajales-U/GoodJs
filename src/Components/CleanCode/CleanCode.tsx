import { Outlet } from 'react-router-dom'
import cleanCodeData from '../../Mock/CleanCode/CleanCode'
import { DescriptionHeader, Ul } from './Style'
import Card from '../Card/Card'
import { HeaderSites, StylesContent } from '../Styles'

export default function CleanCode() {
  return (
    <StylesContent>
      <HeaderSites>
        <DescriptionHeader>{cleanCodeData.description}</DescriptionHeader>
        <DescriptionHeader>{cleanCodeData.description2}</DescriptionHeader>
      </HeaderSites>
      <Outlet />
      <Ul>
        {
          cleanCodeData.links.map((link) =>(
            <Card key={link.id} className='card-clean-code' img={link.img} title={link.title} description={link.description} link={link.link}/>
            ))
          }
      </Ul>
    </StylesContent>
  )
}
