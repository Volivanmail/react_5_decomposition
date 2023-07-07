import './App.css';
import * as data from './data/data';
import ExchangeRates from './components/ExchangeRates/ExchangeRates';


function App() {

  return (
    <>
      <header className='header'>
        <div className='newsPanel'>
          <News news={news} />
          <ExchangeRates rates={data.rates} /> 
        </div>
        <WorkOnBugs title='Работа над ошибками' text='Смотрите на Яндексе и запоминайте' image={require("./Media/error.jpeg")} link='#' />
      </header>
      {/* <div className='searchBox'>
        <SearchMenu searchMenuItems={searchMenuItems} />
        <SearchBar />
        <Banner image={require("./Media/furious.jpeg")} />
      </div>
      <footer className='footer'>
        <div>
          <WeatherWidget icon={require("./Media/rain_weather_icon_151998.png")} mailLink="#" mainTemp="+17" upLink="#" upName="Утром" upTemp="+17" downLink="#" downName="Днем" downTemp="+20"/>
          <PopularWidget popular={popular} />
        </div>
        <div>
          <Widget title="Карта России" link="#"><a href="/#">Расписания</a></Widget>
          <TvWidget tv={tv} />
        </div>
        <div>
          <TvWidgetOnline tvOnline={tvOnline} />
        </div>
       
        
      </footer> */}
    </>
  );
}

export default App
