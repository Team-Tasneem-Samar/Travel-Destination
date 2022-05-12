
import Tour from './Tour/Tour';

import {Link} from 'react-router-dom';
function Tours(props){
    return (
        <div>
            {
                props.tourData.map(element=>{
                    return (
                        <Link to={`/city/${element.id}`}>

                            <Tour dataWithKey={element}/>
                        </Link>
                    )
                })

            }
        </div>
    )

    
}




export default Tours;