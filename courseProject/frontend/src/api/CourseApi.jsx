import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

export default API;

export const getCourses = () => API.get("/courses");
export const getCourseById = (id) => API.get(`/courses/${id}`);
export const createCourse = (courseData) => API.post("/courses", courseData);
export const updateCourse = (id, courseData) => API.put(`/courses/${id}`, courseData);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);
