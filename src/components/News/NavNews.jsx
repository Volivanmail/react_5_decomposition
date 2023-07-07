

// Компонент новостной навигации по тегам и отображение текущего времени и даты

export function NavNews(props) {
    return (
        <div className="news-nav">
            {filters.map((item) => 
                <li className={selected === item.name ? "filter active" : "filter"} onSelect={onSelect}><a href={item.link}>{item.name}</a></li>
            )}
        </div>
        )
}