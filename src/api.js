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
    const data = [
        {id: 1, title: 'Hello!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aspernatur!'},
        {id: 2, title: 'World!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque modi quas sed?'},
        {id: 3, title: 'Sad!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, atque consequatur enim id impedit molestias nemo nihil nulla optio, perferendis, recusandae totam veritatis. Ullam?'},
        {id: 4, title: 'a!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dicta, voluptatum!'}];
    return new Promise(resolve => {
        setTimeout(() => resolve(data), 3000);
    })
}