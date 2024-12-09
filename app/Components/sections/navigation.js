import Link from "next/link";

export default function Navigation({canShowCommunity = true}) {

    return <nav className="navbar">
        <div className="navbar-logo">
            <a href=""><img src="/images/brand-logo.png" alt="Brand Logo"/></a>
        </div>
        <ul className="navbar-links">
            <li>
                <Link href="/">Home</Link></li>
            <li>
                <Link href="/">About Us</Link>
            </li>
            <li>
                <Link href="/code-editor">Code Editor</Link></li>
            <li>
                <Link href="/">Quiz</Link></li>
            <li>
                <Link href="/">Interview Questions</Link></li>
            <li>
                <Link href="/">Login</Link></li>
        </ul>
        {canShowCommunity && <div className="community-button">

            <img src="/images/whatsappLogo.png" alt="WhatsApp Icon"/>
            <span>Community</span>
        </div>}

    </nav>
}

