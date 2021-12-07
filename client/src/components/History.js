import { useEffect, useState } from "react"

export default function History(){
    const [hist, setHist] = useState([])
    useEffect(()=> {
    fetch("/history")
        .then(r=>r.json())
        .then(winner=> {
            console.log(winner)
            setHist(winner)})}
    ,[])
    
    return(
        <>
            {hist.map(w => <h1>{w.name}</h1>)}
        </>
    )
}