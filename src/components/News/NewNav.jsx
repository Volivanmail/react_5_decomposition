// Компонент новостной навигации по тегам и отображение текущего времени и даты

function NewsNav(props) {
    return (
        <div className="news-nav">
            {props.children}
        </div>
        <div className="local-date">
            {new Date().toLocaleString()}
        </div>
        )
}