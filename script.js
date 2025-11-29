// Асинхронна функція для запиту до API
async function getDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(url); // робимо запит до API

        if (!response.ok) {
            throw new Error('Помилка запиту: ' + response.status);
        }

        const data = await response.json(); // перетворюємо у JS-об’єкт
        console.log(data);

        // Виводимо фото на сторінку
        const container = document.getElementById('dogContainer');
        container.innerHTML = `<img src="${data.message}" alt="Dog Image">`;

    } catch (error) {
        console.error('Помилка:', error);
        document.getElementById('dogContainer').innerHTML = '<p>Не вдалося отримати фото 😢</p>';
    }
}

// Додаємо іуваіууауіауіауіі у іу у уі уі іуби улодаиі бьч твлопиівпліиобфдлпоідщюипдудофі іімімім
document.getElementById('getDogBtn').addEventListener('click', getDogImage);


