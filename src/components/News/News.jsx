import New from "./New";
import NavNews from "./NavNews";
import LocDate from "./Date";
import PropTypes from "prop-types";


//Список новостей,  

export default function News({navNews, news}) {

    return (
        <div className="news">
            <div className="navigate">
                <NavNews filters={navNews}  selected={"Сейчас в СМИ"} onSelect={function onSelect() {}} />
                <LocDate/>
            </div>
            <div>
                <New news={news} />
            </div>
        </div>
    )
}

News.propTypes =  {
    navNews: PropTypes.array,
    news: PropTypes.array
}