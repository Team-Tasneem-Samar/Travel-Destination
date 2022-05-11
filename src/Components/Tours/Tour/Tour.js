// import Data from '../../../Data/db.json'
const Data = require("../../../Data/db.json");

function Tour (){
    return(
        <div>
            {
            Data.map (params => {
                return(
                    <div>
                        <h1>{params.name}</h1>
                        <img src={params.image} alt={params.name}/>

                    </div>

                
                )
            })  
            }
      
        </div>
    )
}


export default Tour;