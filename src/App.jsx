import Terms from './Pages/terms';
import Home from './Pages/Home';
import About from './Pages/about';
import Contact from './Pages/contact';
import Gallery from './Pages/gallery';
import Deluxrooms from './Pages/deluxrooms';
import SingleRoom from './Pages/single-room';
import Rooms from './Pages/rooms';
import ExecutiveSuite from './Pages/executiveroom';
import Presidential from './Pages/presidentialrooms';
import FAQ from './Pages/faq';

import StandardRoom from './Pages/standardroom';
import Navbar from './Pages/navbar';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
import './App.css'
import CancellationPolicy from './Pages/cancellayionpolicy';
import LoginFirst from './Pages/login-first';
import Attraction from './Pages/attraction';
import DoubleRoom from './Pages/double-room';

import FamilyRoom from './Pages/family-room';
import Villa from './Pages/villa';
import Login from './Pages/login';
function App() {
 

  return (
    <> 
    

<Router>
  <Navbar/>
 
  <Routes>  
<Route path='/' element={ <Home />} />
<Route path='/about' element={ <About />} />
<Route path='/contact' element={ <Contact/>} />
<Route path='/gallery' element={ <Gallery />} />
<Route path='/deluxrooms' element={ <Deluxrooms />} />
<Route path='/presidentialrooms' element={ <Presidential />} />
<Route path='/single-room' element={ <SingleRoom />} />
<Route path='/faq' element={ <FAQ />} />
<Route path='/rooms' element={ <Rooms />} />
<Route path='/standardroom' element={ <StandardRoom/>} />
<Route path='/double-room' element={ <DoubleRoom/>} />
<Route path='/cancellationpolicy' element={ <CancellationPolicy/>} />
<Route path='/villa' element={ <Villa/>} />
<Route path='/family-room' element={ <FamilyRoom/>} />
<Route path='/executiveroom' element={ <ExecutiveSuite/>} />
<Route path='/login' element={ <Login/>} />
<Route path='/login-first' element={ <LoginFirst/>} />
<Route path='/terms' element={ <Terms/>} />
<Route path='/attraction' element={ <Attraction/>} />
  </Routes>
  </Router>  





    </>
  )
}

export default App
