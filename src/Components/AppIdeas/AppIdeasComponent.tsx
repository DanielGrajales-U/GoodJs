import { LevelTitle } from ".";
import AppIdeasData from "../../Mock/AppIdeas/AppIdeas";
import { HeaderSites, StylesContent } from "../Styles";
import ListAppComponent from "./ListAppComponent";


export default function AppIdeasComponent() {
  return (
    <StylesContent>
        <HeaderSites>{AppIdeasData.description}</HeaderSites>
        {
            AppIdeasData.levels.map(level => (
                <div key={level.title}>
                    <LevelTitle>{level.title}</LevelTitle>
                    <hr />
                    <ListAppComponent list={level.proyects} />
                </div>
            ))
        }
    </StylesContent>
  )
}
