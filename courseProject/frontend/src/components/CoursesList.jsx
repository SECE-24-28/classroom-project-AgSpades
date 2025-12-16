import { getCourses, deleteCourse, updateCourse } from "../api/CourseApi";
import { useState, useEffect } from "react";
function CoursesList() {

    const [courses, setCourses] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDuration, setEditDuration] = useState("");

    const fetchCourses = async () => {
        try {
            const response = await getCourses();
            setCourses(response.data);
        }
        catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const handleDelete = async (courseId) => {
        try {
            await deleteCourse(courseId);
            fetchCourses();
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };

    const handleEdit = (course) => {
        setEditingId(course._id);
        setEditTitle(course.title);
        setEditDuration(course.duration);
    };

    const handleUpdate = async (courseId) => {
        try {
            const courseData = {
                title: editTitle,
                duration: editDuration,
            };
            await updateCourse(courseId, courseData);
            setEditingId(null);
            fetchCourses();
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditTitle("");
        setEditDuration("");
    };

    useEffect(() => {
        fetchCourses();
    }, [courses]);
    return (
        <div>
            {
                courses.map((course) => (
                    <li key={course._id}>
                        {editingId === course._id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    placeholder="Course Title"
                                />
                                <input
                                    type="text"
                                    value={editDuration}
                                    onChange={(e) => setEditDuration(e.target.value)}
                                    placeholder="Course Duration"
                                />
                                <button onClick={() => handleUpdate(course._id)}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{course.title}</h3>
                                <p>{course.duration}</p>
                                <button className="btnEdit" onClick={() => handleEdit(course)}>Edit</button>
                                <button className="btnDelete" onClick={() => handleDelete(course._id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))
            }
        </div >
    );
}

export default CoursesList;