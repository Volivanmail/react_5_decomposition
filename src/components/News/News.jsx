import New from "./New";
import NavNews from "./NavNews";
import LocDate from "./Date";
import PropTypes from "prop-types";
import { useState } from "react";


//Компонент новостного блока  

export default function News({navNews, news}) {
    const [stateFilter, selectFilter] = useState("Сейчас в СМИ");

    return (
        <div className="news">
            <div className="navigate">
                <NavNews filters={navNews}  selected={stateFilter} onSelect={(filter) => selectFilter(filter)} />
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