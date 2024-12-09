export default function Header() {
    return <header className="header">


        <div className="header__text-box">

            <h1>Learn To <span>Code</span></h1>
            <p>Unlock your potential with the most effective and nurturing platform designed to help you master
                in-demand skills, secure employment, and elevate your career trajectory.</p>
            <a href="">Join Now <span><img src="/images/join-us-arrow.png"/></span></a>
        </div>
        <div className="header__image-box">
            <img src="/images/brown-dots.png" className="background-brown-dots"/>
            <img src="/images/green-dots.png" className="background-green-dots"/>
            <img src="/images/kid-with-ipad.png" alt="logo" className="header-hero-img"/>
        </div>
    </header>
}