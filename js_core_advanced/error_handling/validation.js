const num = 4.2;

function validation(num) {
    if (Number.isInteger(num)) {
        return `${num} - целое число`;
    }
    throw new Error('Число не является целым');
}

try {
    console.log(validation(num));
} catch (error) {
    console.error(error.message);
}
