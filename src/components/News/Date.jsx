// Компонент для отображения текущего времени и даты

let date = new Date().toLocaleString();

export default function LocDate() {
    return (
        <div className="local-date">{date}</div>
    )
}