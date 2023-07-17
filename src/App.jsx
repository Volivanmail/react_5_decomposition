import './App.css';
import * as data from './data/data';
import News from './components/News/News';
import ExchangeRates from './components/ExchangeRates/ExchangeRates';
import Promo from './components/Promo/Promo';
import Ads from './components/Ads/Ads';
import Search from './components/Search/Search';
import SearchNav from './components/Search/SearchNav';
import adsBanner from './data/icon/adsBanner.png';
import ya from './data/icon/ya.png';


export default function App() {

  return (
    <>
      <section className='news-block'>
        <div>
          <News news={data.news} navNews={data.navNews}/>
          <ExchangeRates rates={data.rates} /> 
        </div>
        <Promo props={data.promo} />
      </section>
      <div className='search-block'>
        {/* <SearchNav searchItems={data.searchItems} /> */}
        <Search icon={ya}/>
        <Ads image={adsBanner} />
      </div>
      {/* <footer className='footer'>
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
