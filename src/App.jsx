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
import Widgets from './components/Widgets/Widgets';


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
      <section className='search-block'>
        <SearchNav searchItems={data.searchItems} />
        <Search icon={ya}/>
        <Ads image={adsBanner} />
      </section>
      <section className='widgets'>
        <Widgets/>
      </section>
    </>
  );
}
