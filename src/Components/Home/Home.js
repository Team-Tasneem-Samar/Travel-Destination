import Header from '../Header/Header';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';
import dataTravel from '../../Data/db.json';


function Home() {
  return (
    <>
    <Header/>
    <p>welcom to Home page</p>
    
    <Tours/>
    
    <Footer />
  
       </>
  );
}

export default Home;