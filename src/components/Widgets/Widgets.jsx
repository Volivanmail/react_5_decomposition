import React from "react";
import Widget from "./Widget";

function Widgets() {
    return (
        <ul className="widgets-list">
            <Widget title='Погода'>
                <div className='widget-content'></div>
            </Widget>
            <Widget title='Карта Германии'>
                <div className='widget-content'></div>
            </Widget>
            <Widget title='Эфир'>
                <div className='widget-content'></div>
            </Widget>
            <Widget title='Посещаемое'>
                <div className='widget-content'></div>
            </Widget>
            <Widget title='Телепрограмма'>
                <div className='widget-content'></div>
            </Widget>
        </ul>
    )
}

export default Widgets;