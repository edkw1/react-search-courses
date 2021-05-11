import React from "react";

import './Course.css';

const Course = ({course, onSelect}) => {

    const cutIfMoreThan = (str, num) => {
        return str.length > num ? str.substr(0, num)+'...' : str;
    }

    const closeButtonClickHandler = () => {
        onSelect(course.id);
    }

    return (
        <div className="card">
                <div className="card-body">
                    <div>
                        <img src="/img.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div>
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{cutIfMoreThan(course.description, 150)}</p>
                        <a href="#" className="btn btn-primary" onClick={closeButtonClickHandler}>Подробнее</a>
                    </div>
                </div>
        </div>
    )
}

export default Course;