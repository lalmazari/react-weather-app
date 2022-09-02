import axios from "axios"
import { useContext, useEffect } from "react"
import { WeatherContext } from "./contexts/WeatherContext"

const Header = () => {
    const { searchQuery, setSearchQuery, setLocation, setDays } = useContext(WeatherContext)




    useEffect(() => {
        getWeather(`https://api.weatherbit.io/v2.0/forecast/daily?city=istanbul&key=${process.env.REACT_APP_API_KEY}`)
    }, [])

    const getWeather = async (API) => {
        const { data } = await axios.get(API);

        setLocation(data)
        setDays(data.data)
        console.log(data.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery) {
            getWeather(`https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${process.env.REACT_APP_API_KEY}`)
            setSearchQuery('')
        }
    }

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='row pb-2'>
            <div className='col'>
                <h1 className='display-3 text-center pt-5 text-white'>React Weather App</h1>
                <div className='row py-3 d-flex justify-content-center'>
                    <form className="input-group w-50 " onSubmit={handleSubmit}>
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="City Name"
                            value={searchQuery}
                            onChange={handleOnChange}
                            aria-label="Search"
                            aria-describedby="search-addon" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header