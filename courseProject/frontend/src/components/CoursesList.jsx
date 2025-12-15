import { getCourses } from "../api/CourseApi";
import { useState, useEffect } from "react";
function CoursesList() {

    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const response = await getCourses();
            setCourses(response.data);
        }
        catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [courses]);
    return (
        <div>
            {
                courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.duration}</p>
                    </li>
                ))
            }
        </div>
    );
}

export default CoursesList;