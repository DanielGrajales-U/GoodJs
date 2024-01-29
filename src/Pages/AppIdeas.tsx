import { Outlet } from "react-router-dom";
import useSEO from "../Hooks/useSEO";

export default function AppIdeas() {
  useSEO({
    title: 'AppIdeas',
    description: 'Ideas de proyectos para expandir tu portafolio'
  })
  return (
    <>
      <Outlet />
    </>
  )
}
