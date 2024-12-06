export default function whyUsCard({img, textOne, textTwo}) {
    return <div className="why-us-card">
        <p>
            {textOne} <span>{textTwo}</span>
        </p>
        <img src={img}/>
    </div>
}