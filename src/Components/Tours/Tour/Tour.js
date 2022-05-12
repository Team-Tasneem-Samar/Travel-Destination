
export default function tour(props){
    return(
        <div className="divStyle">
        <h2 className="title">{props.dataWithKey.name}</h2>
        <img className="image" src={props.dataWithKey.image} alt ="seen" ></img>
    </div>
    )
}