import Widget from "./WidgetSimple";
import WidgetUl from "./WidgetUl";
import * as data from "../../data/data";
import pog from "../../data/icon/pog.png";

// Компонент отображения списка виджетов

export default function Widgets() {
    return (
        <div className="widgets-list">
            <Widget title='Погода'>
                <div className="pogoda">
                    <img src={pog} className="pogoda-logo" alt=""></img>
                    <div className='pogoda-data'>
                        <p>Утром +20</p>
                        <p>Чуть позже +3</p>
                    </div>
                </div>
            </Widget>
            <Widget title='Карта Германии'>
                <div className=''>Расписания</div>
            </Widget>
            <WidgetUl title='Эфир' widgetList={data.air}/>
            <WidgetUl title='Посещаемое' widgetList={data.frequented}/>
            <WidgetUl title='Телепрограмма' widgetList={data.programtv}/>
        </div>
    )
}