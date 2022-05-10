
import Header from '../Header/Header';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';
import dataTravel from '../../Data/db.json';


function Home() {
  return (
    <>
    <Header/>
    
    

    {

        dataTravel.map(trav =>{
            return(
                <Tours  name={trav.name} image={trav.image}/>
            )
        })
        }
    

    <Footer />
  
       </>
  );
}

export default Home;
