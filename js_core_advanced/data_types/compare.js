const obj1 = {
    name: 'Alexandr',
    age: 32
}

const obj2 = {
    name: 'Alexey'
}

const obj3 = {
    name: 'Alexandr'
}

function compareObj (obj1, obj2) {
    const keysFromObj2 = Object.keys(obj2);

    for (const key of keysFromObj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true
}

console.log(compareObj(obj1,obj2))