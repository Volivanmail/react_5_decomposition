import uniqid from "uniqid";
import PropTypes from "prop-types";

// Компонент новостной навигации по тегам

export default function NavNews({selected, onSelect, filters}) {
    return (
        <div className="news-nav">
            {filters.map((item) => 
                <div className={selected === item.name ? "filter active" : "filter"} onSelect={onSelect} key={uniqid(item.title)}>
                    <a href={item.link}>{item.title}</a>
            </div>
            )}
        </div>
        )
}

NavNews.propTypes = {
    selected: PropTypes.string,
    onSelect: PropTypes.func,
    filters: PropTypes.array
}