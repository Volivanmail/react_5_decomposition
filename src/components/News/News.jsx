import React from "react";
import { New } from "./New";
import { NavNews } from "./NavNews";
import { Date } from "./Date";


//Список новостей,  

function News(props) {

    return (
        <div className="news">
            <div className="navigate">
                <NavNews selected={"Сейчас в СМИ"} onSelect={function onSelect() {}} />
                <Date/>
            </div>
            <div>
                <ListNews news={props.news} />
            </div>
        </div>
    )
}

export default News;