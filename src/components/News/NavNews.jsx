import uniqid from "uniqid";
import PropTypes from "prop-types";

// Компонент новостной навигации по тегам

export default function NavNews({selected, onSelect, filters}) {
    return (
        <nav className="news-nav">
            {filters.map((filter) => 
                <div className={filter.title === selected? "filter active" : "filter"} 
                    onClick={()=> onSelect(filter.title)} key={uniqid(filter.title)}>
                    <a href={filter.link}>{filter.title}</a>
                </div>
            )}
        </nav>
    )
}

NavNews.propTypes = {
    selected: PropTypes.string,
    onSelect: PropTypes.func,
    filters: PropTypes.array
}