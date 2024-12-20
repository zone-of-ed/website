export default function courseOverview() {
    return <div className="course-overview">

        <div className="icon-section">
            <img src="/images/python.png" alt="Python Logo"/>
        </div>
        <div className="icon-planleaf">
            <img src="/images/plantleaf.png" alt="Plant leaf"/>
        </div>
        <div className="content-section">
            <h4>COURSE OVERVIEW</h4>
            <p>
                Learn to code from scratch, get hired, and have fun along the way with the most modern, up-to-date
                (fully updated for 2024) coding bootcamp on the web! We guarantee you that this is the best coding
                bootcamp.
            </p>
            <div className="details ">
                <div className="detail-item ">
                    <img src="/images/duration.png" alt="Duration Logo"/>
                    <p>2 Months of class</p>
                </div>
                <div className="detail-item">
                    <img src="/images/projects.png" alt="projects Logo"/>
                    <p>10 Projects</p>
                </div>
            </div>
            <h4 className="">WHAT YOU'LL LEARN</h4>
            <ul className="what-you-learn-list ">
                <li><img src="/images/tick.png"/><span>Skills that will allow you to apply for jobs like Web Developer, Software Developer, Front End
                    Developer, JavaScript Developer</span>
                </li>
                <li><img src="/images/tick.png"/><span>Skills that will allow you to apply for jobs like Web Developer, Software Developer, Front End
                    Developer, Python Developer</span>
                </li>
            </ul>
            <h4 className="">PRE-REQUISITES</h4>
            <ul className="pre-request-list ">
                <li>A willingness and enthusiasm to learn</li>
                <li>A computer (Windows, Mac, or Linux) with an internet connection</li>
                <li>A computer (Windows, Mac, or Linux) with an internet connection</li>
                <li>A computer (Windows, Mac, or Linux) with an internet connection</li>
            </ul>
            <button className="join-btn ">
                <img src="/images/whatsappLogo.png" alt="WhatsApp Icon"/> Join in Community
            </button>
        </div>
    </div>
}