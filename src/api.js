import dt from './data.json';
const API_URL = '';

//функция будет возвращать списки найденных курсов по поисковому запросу
export async function findCourses(searchText) {
    // const payload = {
    //     text: searchText
    // }
    // return await fetch(API_URL, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(payload)
    //     }
    // ).then(response => response.json());

    //тестовые данные, эмуляция приема сообщений
    const data = [dt[1], dt[2], dt[3]];

    return new Promise(resolve => {
        setTimeout(() => resolve(data), 3000);
    })
}