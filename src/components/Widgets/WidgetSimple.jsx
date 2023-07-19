import PropTypes from "prop-types";

// Компонент простого виджета, но расширяемый за счет вложенных children

export default function Widget({title, children}) {
    return (
        <div className="widget">
            <h5 className="widget-title">{title}</h5>
            {children}
        </div>
    )
}

Widget.propTypes = {
    title: PropTypes.string,
    children: PropTypes.children
}