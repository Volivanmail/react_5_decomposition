import PropTypes from "prop-types";
import uniqid from "uniqid";

export default function SearchNav ({searchItems}) {

    return (
        <nav className="search-nav">
            {searchItems.map((item) =>
                <a href="#" key={uniqid()}>{item}</a>)}
        </nav>
    )
}

SearchNav.propTypes = {
    searchItems: PropTypes.array,
    item: PropTypes.string
}