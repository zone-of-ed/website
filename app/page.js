import Header from "./Components/sections/header";
import Navigation from "./Components/sections/navigation";
import OurValues from "./Components/sections/ourValues";
import WhyUs from "./Components/sections/whyUs";
import AllCourses from "@/app/Components/sections/allCourses";

export default function Home() {
    return <>
        <Navigation/>
        <Header/>
        <main>
            <OurValues/>
            <WhyUs/>
            <AllCourses/>
        </main>
    </>
}
