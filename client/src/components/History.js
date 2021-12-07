import { useEffect, useState } from "react"

export default function History(props){
    const [hist, setHist] = useState([])
    useEffect(fetch("/history").then(r=>r.json().then(console.log))
    ,[])
    
    return(
        <>
        
        </>
    )
}