import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function TourDetails(props){

    const [isShown,setShown] = useState(false);

    function clickhandle(){
        setShown(!isShown);
    }

    let { id } = useParams();
    let infoData = props.data.filter(element=> element.id === id) ;

    return (
        <>
            <Header />
            <div className='tourDetailsCards'>            
            <h2 id='name'> {infoData[0].name} </h2> 
             <p id='paragraph' >
             {isShown ? infoData[0].info : `${infoData[0].info.substring(0, 250)}`}
             {isShown? <button onClick={clickhandle}>see less</button>:<button onClick={clickhandle}>see more</button> } 
             </p>
   
            <h4 id='price'> {`${infoData[0].price} $`}</h4>
            <img  src={infoData[0].image} />
            </div>

            <Footer/>
        </>
    )
}