export default function courseItem({courseImg, courseTitle}) {
    return <button className="course-item">
        <img src={courseImg} alt="course-logo"/>
        {courseTitle}
    </button>
}