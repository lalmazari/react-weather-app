import { useState, createContext } from "react"

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
    const [location, setLocation] = useState('')
    const [days, setDays] = useState([])
    const [searchQuery, setSearchQuery] = useState('')


  return (
    <WeatherContext.Provider value={{ setLocation, setDays, days, location, searchQuery, setSearchQuery}}>
        {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider

