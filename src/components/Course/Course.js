import React from "react";

import './Course.css';

const Course = ({course}) => {
    return (
        <div className="card">
                <div className="card-body">
                    <div>
                        <img src="/img.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div>
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.description}</p>
                        <a href="#" className="btn btn-primary">Подробнее</a>
                    </div>
                </div>
        </div>
    )
}

export default Course;