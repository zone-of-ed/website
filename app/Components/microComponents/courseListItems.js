import CourseItem from "@/app/Components/microComponents/courseItem";

export default function courseListItems() {
    return <div className='course-list-item'>
        <CourseItem courseTitle={"Python fullstack development"} courseImg={"/images/python.png"}/>
        <CourseItem courseTitle={"React Js Development"} courseImg={"/images/react.png"}/>
        <CourseItem courseTitle={"Mern Stack Development"} courseImg={"/images/mern.png"}/>
    </div>
}