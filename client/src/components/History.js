import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Header from "../styles/Header";

export default function History(){
    const [hist, setHist] = useState([]);

    useEffect(()=> {
    fetch("/history")
        .then(r=>r.json())
        .then(winner=> {
            setHist(winner)})}
    ,[]);
    
    return(
        <>
         <Link to="/"><button className="exit">Home</button></Link>
         <Header>Previous Winners</Header>
            <div id="history">
            {hist.map(w => <span className="container" key={w.id}>
                <img src={w.image} alt={w.name}/>
                <p id={w.id}>{w.name}</p></span>)}
            </div>
        </>
    )
}