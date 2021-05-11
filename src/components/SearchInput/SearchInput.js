import React, {useState} from 'react';

import './SearchInput.css';

const SearchInput = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

    const searchTextInputHandler = (event) => {
        setSearchText(event.target.value);
    };

    const searchButtonClickHandler = () => {
        onSearch(searchText);
    };

    return (
        <div >
            <label htmlFor="searchText"
                       className="form-label">Введите текст</label>
            <div className="search-panel" id="search-panel">
                <input type="email"
                       className="form-control"
                       id="searchText"
                       placeholder="О чем курс и т.д."
                       onChange={searchTextInputHandler}
                       value={searchText}
                />
                <button type="button"
                        className="btn btn-outline-primary"
                        onClick={searchButtonClickHandler}
                >Найти</button>
            </div>
        </div>
    );
}


export default SearchInput;