import { Routes, Route  } from "react-router-dom";
import Home from './Components/Home/Home';
import TourDetails from './Components/TourDetails/TourDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>



    </>
   

  );
}

export default App;
