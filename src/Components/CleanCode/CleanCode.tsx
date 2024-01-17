import { Outlet } from 'react-router-dom'
import cleanCodeData from '../../Mock/CleanCode/CleanCode'
import Cards from '../Cards/Cards'
import { CleanCodeContent, DescriptionHeader, HeaderCleanCode, Ul } from './Style'

export default function CleanCode() {
  return (
    <CleanCodeContent>
      <HeaderCleanCode>
        <DescriptionHeader>{cleanCodeData.description}</DescriptionHeader>
        <DescriptionHeader>{cleanCodeData.description2}</DescriptionHeader>
      </HeaderCleanCode>
      <Outlet />
      <Ul>
        {
          cleanCodeData.links.map((link) =>(
            <Cards img={link.img} title={link.title} description={link.description} link={link.link}/>
            ))
          }
      </Ul>
    </CleanCodeContent>
  )
}
