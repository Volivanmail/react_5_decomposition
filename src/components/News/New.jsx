import uniqid from 'uniqid';
import PropTypes from 'prop-types';

// Компонент список новостей

export default function New({ news }) {
    return (
        <ul className="new">
            {news.map((item) => 
                <li key={uniqid()}>
                    <img src={item.icon} alt=""></img><a href={item.link}>{item.text}</a>
                </li>
            )}
        </ul>
    )
}

New.propTypes = {
    news: PropTypes.array,
    item: PropTypes.object,
}