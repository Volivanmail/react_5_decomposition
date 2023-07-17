export default function Search(icon) {
    return (
        <div className="search">
            <img src={icon} className="logo" alt="" />
                <form className='seafch-form'>
                    <input className="search-area" type="text" name="search" placeholder="Найдется все. Например, фазы луны сегодня"/>
                    <button className="search-button" type="submit" name="submit">Найти</button>
                </form>
        </div>
    )
}