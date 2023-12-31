import uniqid from "uniqid";
import PropTypes from "prop-types";

// Компонет биржевых котировок с Московской биржи

export default function ExchangeRates({rates}) {
    return (
        <div className="rates-list">
            {rates.map((item) => 
                <div className="rate" key={uniqid(item.title)}>
                    <a href={item.link}>{item.title}</a>
                    {item.rate}
                    <span>{item.growth}</span>
                </div>
            )}
        </div>
    )
}

ExchangeRates.propTypes = {
    rates: PropTypes.array
};