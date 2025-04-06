import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function Home(){

    const [input, setInput] = useState("")
    const navigate = useNavigate();

    const Submithandler = () => {
        navigate(`/room/${input}`)
    }

    return(
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your Name " />
                <button onClick={ Submithandler }>Join</button>
            </div>
        </div>
    )
}

export default Home