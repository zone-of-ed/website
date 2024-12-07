export default function contentCard({heading, content}) {
    return <div className="content-item"><h4>{heading}</h4> <p>
        {content}
    </p></div>
}