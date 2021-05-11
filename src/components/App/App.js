import './App.css';
import React, {useState} from "react";
import SearchInput from "../SearchInput";
import CoursesList from "../CoursesList";
import {findCourses} from "../../api";


function App() {

    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);


    //в этой функции получаем курсы из введенного текста
    const onSearchTextHandler = async (searchText) => {
        setLoading(true);
        console.log('on search', searchText);
        const fetchedCourses = await findCourses(searchText);
        setCourses(fetchedCourses);
        setLoading(false);
    }

    return (
        <div>
            <div className="container">
                <h3>Поиск курсов</h3>
                <SearchInput onSearch={onSearchTextHandler}/>
                <hr/>
                {loading?<div>Загрузка...</div>:<CoursesList courses={courses}/>}
            </div>
        </div>
    );
}

export default App;
