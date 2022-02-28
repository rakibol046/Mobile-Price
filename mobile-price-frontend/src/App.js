import './App.css';
import LatestDeviceMessage from './components/LatestDeviceMessage';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Phones from './components/Phones';
import './static//css/nav-style.css';
import './static/css/card-style.css';
import './static/css/latest-device-message-style.css';
import './static/css/price-range-style.css';
import './static/css/mobile-details-style.css';
import './static/css/mobile-details-style.css';
import './static/css/home-style.css';
import MobileDetails from './components/MobileDetails'
import Home from './components/Home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/phones/*' element={<Phones />} >
          {/* <Route path='/:id' element={<MobileDetails />} /> */}
        </Route>
        <Route path='/tablets' element={<Phones />} />
        <Route path='/laptops/' element={<Phones />} />
        <Route path='/desktops' element={<Phones />} />
        <Route path='/watches' element={<Phones />} />
        <Route path='/headphones' element={<Phones />} />
    </Routes>

    </div>

    
  );
}

export default App;
