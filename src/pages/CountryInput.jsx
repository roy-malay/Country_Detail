import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Earth_video from "../component/Earth_video"

function CountryInput() {
    const [country, setCountry] = useState("")
    
    function saveCountry(e) {
        setCountry(e.target.value)
    }

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate(`country_detail/${country}`)
    }

    function Enter(e) {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }


    return (
        <div>
            <Earth_video />
            {/* Input Container */}
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white/5 backdrop-blur p-6 m-4 rounded-xl w-80 text-center">
                    <h1 className="text-2xl font-bold text-white">
                        COUNTRY DETAILS
                    </h1>
                    <input 
                        type="text" 
                        placeholder="Enter Country Name" 
                        className="border-2 border-white rounded-md p-2 mt-4 w-full text-white text-center font-bold placeholder-gray-400 " 
                        value={country}
                        onChange={saveCountry}
                        onKeyDown={Enter}
                    />
                    <button onClick={handleSubmit}  className="block bg-blue-700 text-white font-bold rounded-md p-2 mt-4 w-full hover:bg-blue-500 hover:scale-105 active:scale-95 transition duration-300">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CountryInput