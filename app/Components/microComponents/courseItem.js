export default function courseItem({courseImg, courseTitle, borderClass}) {
    return <button className={`course-item ${borderClass}`}>
        <img src={courseImg} alt="course-logo"/>
        {courseTitle}
    </button>
}