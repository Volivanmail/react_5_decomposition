import './App.css';
import * as data from './data/data';
import News from './components/News/News';
import ExchangeRates from './components/ExchangeRates/ExchangeRates';
import Promo from './components/Promo/Promo';


export default function App() {

  return (
    <>
      <header className='header'>
        <div className='newsPanel'>
          <News news={data.news} navNews={data.navNews}/>
          <ExchangeRates rates={data.rates} /> 
        </div>
        <Promo props={data.promo} />
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
