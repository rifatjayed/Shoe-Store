
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Products from './Components/Products/Products'

import Recommended from './Components/Recommended/Recommended'
import Sidebar from './Components/Sliderbar/Sidebar/Sidebar'


function App() {

  return (
    <>
<Sidebar></Sidebar>
      <Navigation></Navigation>
      <Recommended></Recommended>
      <Products></Products>
      
    </>
  )
}

export default App
