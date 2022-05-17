const courses = [
  {
    id: 1,
    title: 'React',
    persianTitle: 'ری‌اکت',
    url: 'https://quera.ir/college/assignments/30868',
  },
  {
    id: 2,
    title: 'Javascript',
    persianTitle: 'جاوااسکریپت',
    url: 'https://quera.ir/college/assignments/30818',
  },
]

function CourseList() {
  function performAction(e, courseId) {
    e.preventDefault()
    const selectedCourse = courses.find((course) => course.id === courseId)
    alert(selectedCourse.persianTitle)
  }

  return (
    <ul className="list-group">
      {courses.map((course) => (
        <li
          className="list-group-item"
          key={course.id}
          onClick={(e) => performAction(e, course.id)}
        >
          {course.persianTitle}
        </li>
      ))}
    </ul>
  )
}

export default CourseList
