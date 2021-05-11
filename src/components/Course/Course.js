import React from "react";

import './Course.css';

const Course = ({course}) => {
    return <div>Course {course.title} ({course.id})</div>
}

export default Course;