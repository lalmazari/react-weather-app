import { useContext } from "react";
import { WeatherContext } from "./contexts/WeatherContext";
import DaysCard from "./DaysCard";

const Main = () => {

  const {  days, location } = useContext(WeatherContext)

  return (
    <div className='container'>
      <h2 className="text-center text-white display-5 py-3">{location.city_name}</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4">

        {days.filter((day, index)=> index <5).map(day => (
          <DaysCard day={day}/>
        ))} 
      </div>
    </div>
  );
}

export default Main;