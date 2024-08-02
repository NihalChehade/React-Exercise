const Tweet = (props)=> {
   
    return (
        <ul className="ulStyle">
           <li className="liStyle"><b>Tweeter username:</b> {props.username} </li> 
           <li className="liStyle"><b>Tweeter name:</b> {props.name}</li>
           <li className="liStyle"><b>Tweet Date:</b> {props.date}</li>
           <li className="liStyle"><b>Tweet message:</b> {props.message}</li>
        </ul>
    )
}