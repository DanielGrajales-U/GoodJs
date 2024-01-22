import { LevelTitle } from ".";
import AppIdeasData from "../../Mock/AppIdeas/AppIdeas";
import { HeaderContent, StylesContent } from "../Styles";
import ListAppComponent from "./ListAppComponent";


export default function AppIdeasComponent() {
  return (
    <StylesContent>
        <HeaderContent>{AppIdeasData.description}</HeaderContent>
        {
            AppIdeasData.levels.map(level => (
                <div>
                    <LevelTitle>{level.title}</LevelTitle>
                    <hr />
                    <ListAppComponent list={level.proyects} />
                </div>
            ))
        }
    </StylesContent>
  )
}
