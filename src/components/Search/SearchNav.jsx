import PropTypes from "prop-types";
import uniqid from "uniqid";

// Компонент навигации поиска по тегам
export default function SearchNav ({searchItems}) {

    return (
        <nav className="search-nav">
            {searchItems.map((item) =>
                <a className="search-item" href="#" key={uniqid()}>{item}</a>)}
        </nav>
    )
}

SearchNav.propTypes = {
    searchItems: PropTypes.array,
    item: PropTypes.string
}