function createTask(name, delay) {
    return new Promise((resolve, reject) => {
        console.log(`Задача "${name}" началась.`);
        setTimeout(() => {
            resolve(`Задача "${name}" выполнена!`);
        }, delay);
    });
}

createTask("Получение данных пользователя", 1500)
    .then(result => {
        console.log(result);
        return createTask("Получение его заказов", 1000);
    })
    .then(result => {
        console.log(result);
        return createTask("Отправка отчета", 500);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Произошла ошибка в цепочке:", error);
    })
    .finally(() => {
        console.log("Все операции завершены.");
    });