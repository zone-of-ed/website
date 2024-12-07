import Header from "./Components/sections/header";
import Navigation from "./Components/sections/navigation";
import OurValues from "./Components/sections/ourValues";
import WhyUs from "./Components/sections/whyUs";
import AllCourses from "@/app/Components/sections/allCourses";
import BenefitsOfJoining from "@/app/Components/sections/benefitsOfJoining";
import Footer from "@/app/Components/sections/footer";

export default function Home() {
    return <>
        <Navigation/>
        <Header/>
        <main>
            <OurValues/>
            <WhyUs/>
            <AllCourses/>
            <BenefitsOfJoining/>

        </main>
        <Footer/>
    </>
}
