import WeatherContextProvider from "./components/contexts/WeatherContext";
import Header from "./components/Header";
import Main from "./components/Main";


const App = () => {
  return (
    <WeatherContextProvider>
      <div className="container">
        <Header />
        <Main />
      </div>
    </WeatherContextProvider>

  );
}

export default App;
