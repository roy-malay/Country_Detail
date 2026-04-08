import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import Earth_video from "../component/Earth_video"

function CountryDetail() {

    const { country } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${country}`)
            .then(res => setData(res.data[0]))
            .catch(err => console.log(err))
    }, [country])

    let capital = ""
    let population = ""
    let flag = ""
    let language = ""
    let currency = ""
    let name = ""

    if (data) {
        capital = data.capital?.[0]
        population = data.population?.toLocaleString()
        flag = data.flags?.png
        language = Object.values(data.languages || {}).join(", ")
        currency = Object.values(data.currencies || {})[0]?.name
        name = data.name.common
    }

    return (
        <div>
            <Earth_video />

            <div className="flex justify-center items-center h-screen">

                {!data ? (
                    <div className="bg-white/5 backdrop-blur border border-white/20 p-6 m-4 rounded-xl w-80 text-center">
                        <p className="text-white text-2xl font-bold">
                            Loading...
                        </p>

                        <Link
                            to="/"
                            className="block bg-blue-700 text-white font-bold rounded-md p-2 mt-5 w-full hover:bg-blue-500 hover:scale-105 active:scale-95 transition duration-300"
                        >
                            Again
                        </Link>

                    </div>

                ) : (

                    <div className="bg-white/5 backdrop-blur border border-white/20 p-6 m-4 rounded-xl w-80 text-center">

                        {/* Country Name */}
                        <h1 className="text-2xl font-bold text-white">
                            {name.toUpperCase()}
                        </h1>

                        {/* Flag */}
                        <img
                            src={flag}
                            alt={`${name} flag`}
                            className="mx-auto mt-3 w-20 h-12 object-cover"
                        />

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-4 text-white mt-4">

                            {/* Capital */}
                            <div>
                                <p className="font-semibold">Capital</p>
                                <div className="border border-white rounded-md mt-1 min-h-12.5 flex items-center justify-center px-2 text-sm">
                                    {capital}
                                </div>
                            </div>

                            {/* Population */}
                            <div>
                                <p className="font-semibold">Population</p>
                                <div className="border border-white rounded-md mt-1 min-h-12.5 flex items-center justify-center px-2 text-sm">
                                    {population}
                                </div>
                            </div>

                            {/* Currency */}
                            <div>
                                <p className="font-semibold">Currency</p>
                                <div className="border border-white rounded-md mt-1 min-h-12.5 flex items-center justify-center px-2 text-sm">
                                    {currency}
                                </div>
                            </div>

                            {/* Language */}
                            <div>
                                <p className="font-semibold">Language</p>
                                <div className="border border-white rounded-md mt-1 min-h-12.5 flex items-center justify-center px-2 text-sm text-center">
                                    {language}
                                </div>
                            </div>

                        </div>

                        {/* Back Button */}
                        <Link
                            to="/"
                            className="block bg-blue-700 text-white font-bold rounded-md p-2 mt-5 w-full hover:bg-blue-500 hover:scale-105 active:scale-95 transition duration-300"
                        >
                            Again
                        </Link>

                    </div>

                )}

            </div>
        </div>
    )
}

export default CountryDetail