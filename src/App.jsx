import { weaponsList } from './data'
import './App.css'
import Grid from './Grid'
function App() {
  

  return (
    <>
      <Grid weaponsList={weaponsList} />
    </>
  )
}

export default App
