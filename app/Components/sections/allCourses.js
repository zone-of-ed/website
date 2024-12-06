import CourseOverview from "@/app/Components/microComponents/courseOverview";
import CourseListItems from "@/app/Components/microComponents/courseListItems"

export default function allCourses() {
    return <section className="all-courses ">
        <div className="all-courses-heading-container">
            <h2 className="section-heading text-align-center">All <span>Courses</span></h2>
        </div>
        <div className="all-courses-container max-width">
            <CourseListItems/>
            <div className="all-courses-line"></div>
            <CourseOverview/>
        </div>
    </section>
}