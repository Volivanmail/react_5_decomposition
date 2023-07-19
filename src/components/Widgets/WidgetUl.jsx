import uniqid from 'uniqid';
import PropTypes from "prop-types";

// Компонент Виджет со списком

export default function WidgetUl({title, widgetList}) {

    return(
        <div className="widget">
            <h5 className='widget-title'>{title}</h5>
            <ul>
                {widgetList.map((item) => 
                <li key={uniqid()}>{item}</li>)}
            </ul>
        </div>
    )
}

WidgetUl.propTypes = {
    title: PropTypes.string,
    widgetList: PropTypes.array,
    item: PropTypes.string
}