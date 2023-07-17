import PropTypes from "prop-types";

export default function Ads({image}) {
    return (
        <img className="ads" src={image} alt=""/>
    )
}

Ads.propTypes = {
    image: PropTypes.any
}