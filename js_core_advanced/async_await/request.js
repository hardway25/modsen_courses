async function fetchData(url) {
    console.log(`Загрузка с ${url}`)

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error(`Ошибка HTTP: ${response.status}`)
        }

        const data = await response.json();
        console.log("Данные успешно загружены!")
        return data;

    } catch (error) {
        console.error("Не удалось получить данные:", error.message)
    }
}

async function main() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'

    const result = await fetchData(apiUrl)

    if (result) {
        console.log(result)
    } else {
        console.log("Загрузка данных не удалась.")
    }
}


main()