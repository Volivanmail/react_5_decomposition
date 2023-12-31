import PropTypes from "prop-types";

// Компонент поисковой строки с логотипом
export default function Search({icon}) {
    return (
        <div className="search">
            <img src={icon} className="logo" alt="" />
            <form className='search-form'>
                <input className="search-area" type="text" name="search" placeholder="Найдется все. Например, фазы луны сегодня"/>
                <button className="search-button" type="submit" name="submit">Найти</button>
            </form>
        </div>
    )
}

Search.propTypes = {
    icon: PropTypes.any
}