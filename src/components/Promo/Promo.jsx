import PropTypes from 'prop-types';

// Компонент рекламного блока справа от новостного блока
export default function Promo ({ props }) {

    const { title, description, img, link } = props

    return(
        <div className="promo">
            <img src={img} alt="img" className="promo-image" />
            <a href={link} className="promo-title">{title}</a>
            <p className="promo-text">{description}</p>
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