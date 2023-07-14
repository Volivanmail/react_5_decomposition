import PropTypes from 'prop-types';

export default function Promo ({ props }) {

    const { title, description, img, link } = props

    return(
        <div className="promo">
            <img src={img} alt="img" className="promo-image" />
            <h3>
                <a href={link}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

Promo.propTypes = { 
    props: PropTypes.object,
    title: PropTypes.string, 
    description: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string
}