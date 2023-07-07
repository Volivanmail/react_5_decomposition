export function Date() {
    return (
        <div className="local-date">
            {new Date().toLocaleString()}
        </div>
    )
}