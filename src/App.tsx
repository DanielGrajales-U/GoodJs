import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AppAdvancedRoutes, AppBeginnerRoutes, AppMiddleRoutes, AppsIdeasRoutes, CleanCodeRoutes, PublicRoutes } from './models'
import { AppIdeas, JsCleanCode, JsInterviews } from './Pages'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import { FunctionComponent, ObjectComponent, ClassComponent, VariableComponent, SolidComponents } from './Components/CleanCode/ContentCleanCode'
import AppIdeasComponent from './Components/AppIdeas/AppIdeasComponent'
import { BorderDetails, CalculatorDetails, QuizDetails, PomodoroDetails, BookFinderDetails, MemoryCardDetails, TypingDetails, ExtentionThemeDetails, MovieGaleryDetails, InstagramCloneDetails, ChatDetails, VideoGameDetails } from './Components/AppIdeas'
import DesignPattern from './Pages/DesignPattern'
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={PublicRoutes.HOME} element={<Home/>}/>
          <Route path={PublicRoutes.JSCLEANCODE} element={<JsCleanCode/>}>
            <Route path={CleanCodeRoutes.VARIABLES} element={<VariableComponent/>}/>
            <Route path={CleanCodeRoutes.FUNCTIONS} element={<FunctionComponent/>}/>
            <Route path={CleanCodeRoutes.OBJECTS} element={<ObjectComponent/>}/>
            <Route path={CleanCodeRoutes.CLASS} element={<ClassComponent/>}/>
            <Route path={CleanCodeRoutes.SOLID} element={<SolidComponents/>}/>
          </Route>
          <Route path={PublicRoutes.DESIGNPATTERN} element={<DesignPattern/>}/>
          <Route path={PublicRoutes.APPIDEAS} element={<AppIdeas/>}>
            <Route path={AppsIdeasRoutes.MAIN} element={<AppIdeasComponent/>}/>
            <Route path={AppBeginnerRoutes.BORDERRADIUS} element={<BorderDetails/>}/>
            <Route path={AppBeginnerRoutes.CALCULATOR} element={<CalculatorDetails/>}/>
            <Route path={AppBeginnerRoutes.QUIZ} element={<QuizDetails/>}/>
            <Route path={AppBeginnerRoutes.POMODORO} element={<PomodoroDetails/>}/>

            <Route path={AppMiddleRoutes.BOOKSEARCH} element={<BookFinderDetails/>}/>
            <Route path={AppMiddleRoutes.MEMORYCARD} element={<MemoryCardDetails/>}/>
            <Route path={AppMiddleRoutes.TYPING} element={<TypingDetails/>}/>
            <Route path={AppMiddleRoutes.CHROMEEXTENTION} element={<ExtentionThemeDetails/>}/>

            <Route path={AppAdvancedRoutes.MOVIEGALERY} element={<MovieGaleryDetails/>}/>
            <Route path={AppAdvancedRoutes.INSTAGRAMCLONE} element={<InstagramCloneDetails/>}/>
            <Route path={AppAdvancedRoutes.CHAT} element={<ChatDetails/>}/>
            <Route path={AppAdvancedRoutes.VIDEOGAME} element={<VideoGameDetails/>}/>
          </Route>
          <Route path={PublicRoutes.JSINTERVIEWS} element={<JsInterviews/>}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
