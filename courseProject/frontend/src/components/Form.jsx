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
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="courseDescription">Course Duration:</label>
          <textarea
            id="courseDuration"
            name="courseDuration"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}