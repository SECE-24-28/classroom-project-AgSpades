import { useState } from 'react';
import { createCourse } from '../api/CourseApi';

export default function Form() {
  const [course, setCourse] = useState();
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      title: courseName,
      duration: courseDuration,
    };
    try {
      const response = await createCourse(courseData);
      setCourse(response.data);
      console.log('Course created successfully:', response.data);
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="courseName">Course Name:</label></td>
              <td>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value.trim())}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="courseDuration">Course Duration:</label></td>
              <td>
                <input
                  type="text"
                  id="courseDuration"
                  name="courseDuration"
                  value={courseDuration}
                  onChange={(e) => setCourseDuration(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>

        </table>
      </form>
    </>
  );
}