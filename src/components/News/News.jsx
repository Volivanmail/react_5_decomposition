import React from "react";
import New from './New';


//Список новостей
function News(props) {
    return (
        <div className="news-blocks">
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">Путин упростил получение автомобильных номеров</p>
                </div>
            </New>
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">В команде Зеленского раскрыли план реформ на Украине</p>
                </div>
            </New>
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">Турпомощь прокомментировала гибель десятков россиян в Анталье</p>
                </div>
            </New>
        </div>
    )
}

export default News;