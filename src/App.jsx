import { weaponsList } from './data'
import './App.css'
import Grid from './Grid'
import Footer from './Footer'
function App() {
  

  return (
    <>
      <Grid weaponsList={weaponsList} />
      <Footer/>
    </>
  )
}

export default App
