import { Outlet } from 'react-router-dom'
import cleanCodeData from '../../Mock/CleanCode/CleanCode'
import { DescriptionHeader, HeaderCleanCode, Ul } from './Style'
import Card from '../Card/Card'
import { StylesContent } from '../Styles'

export default function CleanCode() {
  return (
    <StylesContent>
      <HeaderCleanCode>
        <DescriptionHeader>{cleanCodeData.description}</DescriptionHeader>
        <DescriptionHeader>{cleanCodeData.description2}</DescriptionHeader>
      </HeaderCleanCode>
      <Outlet />
      <Ul>
        {
          cleanCodeData.links.map((link) =>(
            <Card className='card-clean-code' img={link.img} title={link.title} description={link.description} link={link.link}/>
            ))
          }
      </Ul>
    </StylesContent>
  )
}
