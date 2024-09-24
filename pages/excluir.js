import { useEffect } from "react"

export default function Excluir(){
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('ra');
    },[])
    return(
        <div>Token excluido</div>
    )
}