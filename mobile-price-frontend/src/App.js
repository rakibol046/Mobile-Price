import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import MobileDetails from './components/MobileDetails';
import Navbar from './components/Navbar';
import Phones from './components/Phones';
import Tablets from './components/Tablets';
import Watches from './components/Watches';
import './static//css/nav-style.css';
import './static/css/card-style.css';
import './static/css/home-style.css';
import './static/css/latest-device-message-style.css';
import './static/css/mobile-details-style.css';
import './static/css/price-range-style.css';




function App() {
  return (
    <div className="">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/phones/:deviceId' element={<MobileDetails bal="heda" />} />
  
        <Route path='tablets' element={<Tablets />} />
        {/* <Route path='laptops' element={<Phones />} />
        <Route path='desktops' element={<Phones />} /> */}
        <Route path='watches' element={<Watches />} />
        {/* <Route path='headphones' element={<Phones />} /> */}

        <Route path='details' element={<MobileDetails />} />
        
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }/>
     
    </Routes>

    </div>

    
  );
}

export default App;
