import DesignPatternDetails from "../Components/DesignPattern/DesignPatternDetails"
import useSEO from "../Hooks/useSEO"


export default function DesignPattern() {
  useSEO({
    title: 'Design Patterns',
    description: 'Patrones de diseño para que mejores tu codigo'
  })
  return (
    <DesignPatternDetails />
  )
}
