import WhyUsCard from "@/app/Components/microComponents/whyUsCard";
import BgLine from "@/app/Components/microComponents/bgLine";

export default function whyUs() {
    return <section className="why-us ">

        <div className="why-us-heading-container max-width">
            <img src="/images/whyus-min.png" className="why-us-image"/>
            <h2 className="section-heading ">Why <span>Us</span></h2>
        </div>
        <div className="why-us-content-container">
            <p className="section-content max-width">In today’s dynamic digital landscape, seize the opportunity to
                elevate your career with ZoneOfEd. Knowledge is the key to unlocking your full potential, and we are
                committed to facilitating that journey. At ZoneOfEd, we foster a culture of learning and unwavering
                support. Through collaborative teaching and skill development, we empower individuals to confidently
                pursue their ambitions. Take the initiative and join us in shaping your future!</p>
        </div>

        <div className="why-us-cards-container max-width ">
            <WhyUsCard img={'/images/career-guidance.png'} textOne="Career" textTwo="Guidance"></WhyUsCard>
            <WhyUsCard img={'/images/real-world.png'} textOne="Real world" textTwo="Practitioners"></WhyUsCard>
            <WhyUsCard img={'/images/problem-solving.png'} textOne="Problem" textTwo="Solving"></WhyUsCard>
            <WhyUsCard img={'/images/liverecording-min.png'} textOne="Live" textTwo="Recording"></WhyUsCard>
            <WhyUsCard img={'/images/weeklyassignments-min.png'} textOne="Weekly" textTwo="Assessments"></WhyUsCard>
            <WhyUsCard img={'/images/toolbased-min.png'} textOne="Tool base" textTwo="learning"></WhyUsCard>
        </div>
        <BgLine/>
    </section>
}