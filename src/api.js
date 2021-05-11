const API_URL = '';

//функция будет возвращать списки найденных курсов по поисковому запросу
export async function findCourses(searchText) {
    const payload = {
        text: searchText
    }

    return await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        }
    ).then(response => response.json());
}