const DaysCard = ({ day }) => {

    return (
        <div className="col " key={day.index}>
            <div className="card" style={{ color: '#4B515D', borderRadius: '35px', width: '12rem' }}>
                <div className="card-body p-3">
                    <h6 className="text-center">{day.datetime}</h6>
                    <div className="d-flex flex-column text-center ">
                        <h6 className="display-6 mb-0 pt-2 font-weight-bold" style={{ color: '#1C2331' }}> {day.temp}° </h6>
                        <div className="d-flex justify-content-around pt-2">
                            <span className="small" style={{ color: '868B94' }}>H: {day.high_temp}°</span>
                            <span className="small" style={{ color: '868B94' }}>L: {day.low_temp}°</span>
                        </div>
                        <figure className="figure align-items-center">
                            <img src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} style={{ width: '100px' }}className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption" style={{ color: '868B94' }}>{day.weather.description}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysCard

{/* <i className="fa-light fa-wind" style={{color: '868B94'}}></i> */ }
