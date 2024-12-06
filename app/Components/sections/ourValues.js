import BgLine from "@/app/Components/microComponents/bgLine";

export default function ourValues() {
    return <section className="ourValues max-width">
        <div className="ourValues-image-container ">
            <img src="/images/ourvalues-min.png" className="margin-top-8"/>
        </div>
        <div className="ourValues-content-container ">
            <h2 className="section-heading text-align-right">Our <span>Values</span></h2>
            <p className="section-content">At Zoneofed, we hold a strong conviction that knowledge constitutes power.
                The
                effective sharing of
                knowledge transpires when individuals exhibit a genuine interest in learning and in assisting one
                another to cultivate and develop new capacities for action. This collaborative approach embodies our
                definition of the learning process.</p>
        </div>
        <BgLine/>
    </section>
}