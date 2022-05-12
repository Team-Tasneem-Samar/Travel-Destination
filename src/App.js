import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './Components/TourDetails/TourDetails';
const travelData=require("./Data/db.json");

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home data={travelData}/>}/>
      <Route path='/city/:id' element= {<TourDetails data={travelData}/>}/>
    </Routes>
    
    </>
  );
}

export default App;
