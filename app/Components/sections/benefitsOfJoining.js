import ContentCard from "@/app/Components/microComponents/contentCard";

export default function benefitsOfJoining() {
    return <section className="benefits-of-joining">
        <div className="heading-container text-align-center max-width">
            <h2>BENEFITS OF JOINING </h2>
            <img src="/images/zoneofed.svg" alt="zoneofed"/>
        </div>
        <div className="img-container">
            <div className="max-width">
                <img src="/images/benefits.png" alt="benefitsOfJoining"/>
            </div>
        </div>
        <div className="content-container">
            <img src='/images/bg-vector.png' alt="bg-vector"/>
            <div className="content-items max-width">
                <ContentCard heading="Knowledge"
                             content="Joining us means starting an incredible quest to seek knowledge and practice learning by working on brilliant projects that are a gateway to hands-on experience and industry-readiness."/>
                <ContentCard heading="Confidence"
                             content="In our early days as developers, we have come across many students who are sharp yet confused and under-confident making it as a developer or even learning coding. In your quest at ZoneofED."/>
                <ContentCard heading="Interview-ready"
                             content="How does one get ready for an interview? The answer is: Knowledge, awareness of best practices, hands-on experience and confidence. That is exactly what we aim at! At ZoneofEd."/>
                <ContentCard heading="One stop destination for resources"
                             content="At ZoneofEd, we do not just strive towards delivering the best content, we aim to make your learning more impactful and sustainable. For this reason, from experience, exposure and expertise"/>
                <ContentCard heading="Hands-on Experience"
                             content="Our delivery of knowledge does not just end in a classroom environment. It goes all the way to working on exciting real world projects, participating in inspiring coding challenges and learning as a group"/>
                <ContentCard heading="Hands-on Experience"
                             content="Our delivery of knowledge does not just end in a classroom environment. It goes all the way to working on exciting real world projects, participating in inspiring coding challenges and learning as a group"/>
            </div>
        </div>
    </section>
}