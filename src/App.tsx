import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AppBeginnerRoutes, AppsIdeasRoutes, CleanCodeRoutes, PublicRoutes } from './models'
import { Algorithms, AppIdeas, JsCleanCode, JsInterviews } from './Pages'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import { FunctionComponent, ObjectComponent, ClassComponent, VariableComponent, SolidComponents } from './Components/CleanCode/ContentCleanCode'
import AppIdeasComponent from './Components/AppIdeas/AppIdeasComponent'
import { BorderDetails, CalculatorDetails, QuizDetails, PomodoroDetails } from './Components/AppIdeas'
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
          <Route path={PublicRoutes.ALGORITHMS} element={<Algorithms/>}/>
          <Route path={PublicRoutes.APPIDEAS} element={<AppIdeas/>}>
            <Route path={AppsIdeasRoutes.MAIN} element={<AppIdeasComponent/>}/>
            <Route path={AppBeginnerRoutes.BORDERRADIUS} element={<BorderDetails/>}/>
            <Route path={AppBeginnerRoutes.CALCULATOR} element={<CalculatorDetails/>}/>
            <Route path={AppBeginnerRoutes.QUIZ} element={<QuizDetails/>}/>
            <Route path={AppBeginnerRoutes.POMODORO} element={<PomodoroDetails/>}/>
          </Route>
          <Route path={PublicRoutes.JSINTERVIEWS} element={<JsInterviews/>}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
