import './App.css';
import React, {useState} from "react";
import SearchInput from "../SearchInput";
import CoursesList from "../CoursesList";
import {findCourses} from "../../api";
import Modal from "../Modal";


function App() {

    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);


    //в этой функции получаем курсы из введенного текста
    const onSearchTextHandler = async (searchText) => {
        setLoading(true);
        console.log('on search', searchText);
        const fetchedCourses = await findCourses(searchText);
        setCourses(fetchedCourses);
        setLoading(false);
    }

    const onSelectCourseHandler = (id) => {
        setSelectedCourse(courses.find(c => c.id === id));
    }

    const onCloseModalHandler = () => {
        setSelectedCourse(null);
    }



    return (
        <div>
            <div className="container">
                <h3>Поиск курсов</h3>
                <SearchInput onSearch={onSearchTextHandler}/>
                <hr/>
                {loading?<div>Загрузка...</div>:<CoursesList courses={courses} onSelectCourse={onSelectCourseHandler}/>}
            </div>
            <Modal course={selectedCourse} onClose={onCloseModalHandler}/>
        </div>
    );
}

export default App;
