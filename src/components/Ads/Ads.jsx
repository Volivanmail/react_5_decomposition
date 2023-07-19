import PropTypes from "prop-types";

// Компонент рекламного банера под поисковым блоком
export default function Ads({image}) {
    return (
        <img className="ads" src={image} alt=""/>
    )
}

Ads.propTypes = {
    image: PropTypes.any
}