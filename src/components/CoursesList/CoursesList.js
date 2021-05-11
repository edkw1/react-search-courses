import React from 'react';
import Course from "../Course";

import './CoursesList.css';


const CoursesList = ({courses}) => {

    const getCoursesList = (cs) => {
        return cs.map(course => {
            return (
                <li>
                    <Course course={course}/>
                </li>
            )
        })
    }

    if (courses.length) {
        return (
            <div>
                Courses list
                <ul>
                    {getCoursesList(courses)}
                </ul>
            </div>
        );
    }else{
        return <div>Список пуст</div>
    }

}

export default CoursesList;