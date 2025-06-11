function testScope() {
    if (true) {
        var x = "Переменная var"  // глобальная или функциональная область видимости
        let y = "Переменная let"  // блочная область видимости
        const z = "Переменная const"  // блочная область видимости

        console.log(x) // доступна
        console.log(y) // доступна
        console.log(z) // доступна
    }
    console.log(x) // доступна
    console.log(y) // ReferenceError
    console.log(z) // ReferenceError
}

testScope()

