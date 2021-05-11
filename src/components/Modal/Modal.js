import React from 'react';

import './Modal.css';

const Modal = ({course, onClose}) => {

    if (course) {
        return (
            <div className="app-backdrop">
                <div className="app-modal">
                    <div className="header">
                        <h5>{course.title}</h5>
                        <span className="close-button" onClick={onClose}>&times;</span>
                    </div>
                    {course.description}
                </div>
            </div>
        )
    } else {
        return null;
    }
}
export default Modal;