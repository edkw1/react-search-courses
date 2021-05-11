import './App.css';
import React, {useState} from "react";
import SearchInput from "../SearchInput";
import CoursesList from "../CoursesList";


function App() {

    const [courses, setCourses] = useState([]);


    //в этой функции получаем курсы из введенного текста
    const onSearchTextHandler = (searchText) => {
        console.log('on search', searchText);
        const fetchedCourses = [
            {id: 1, title: 'text1'},
            {id: 2, title: 'text2'}
        ]
        setCourses(fetchedCourses);
    }

    return (
        <div>
            <div className="container">
                <h3>Поиск курсов</h3>
                <SearchInput onSearch={onSearchTextHandler}/>
                <hr/>
                <CoursesList courses={courses}/>
            </div>
        </div>
    );
}

export default App;
