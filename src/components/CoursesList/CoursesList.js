import React from 'react';
import Course from "../Course";

import './CoursesList.css';


const CoursesList = ({courses, onSelectCourse}) => {

    const getCoursesList = (cs) => {
        return cs.map(course => {
            return (
                <Course course={course} onSelect={onSelectCourse}/>
            )
        })
    }

    if (courses.length) {
        return (
            <div>
                <h5>Список найденных курсов</h5>
                {getCoursesList(courses)}
            </div>
        );
    } else {
        return <div>Список пуст</div>
    }

}

export default CoursesList;