let courses = [
    {name: 'Courses in England', prices: [0, 100]},
    {name: 'Courses in Germany', prices: [500, null]},
    {name: 'Courses in Italy', prices: [100, 200]},
    {name: 'Courses in Russia', prices: [null, 400]},
    {name: 'Courses in China', prices: [50, 250]},
    {name: 'Courses in USA', prices: [200, null]},
    {name: 'Courses in Kazakhstan', prices: [56, 324]},
    {name: 'Courses in France', prices: [null, null]},
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// --------------------------------

function filter(range) { // не передаём входные данные тк условие вроде как позволяет
    let result = [];
    for (let i of courses) {
        if (!(range[1] && !i.prices[1])) { // чтобы мы не улетали в бесконечность при наличии фильтра на бесконечность
            if (
                i.prices[0] >= range[0] && // если цена больше/равна нижней границы
                i.prices[1] <= range[1] // и меньше/равна верхней
            )
                result.push(i); //...это - наш клиент
        }
    }
    return result;
}

function sortByPrice() { // опять же не передаём список курсов
    return courses.sort((a, b) => a.prices[0] - b.prices[0]) // сравниваем начала отрезков
        .sort((a, b) => { // при равных началах сравниваем концы отрезков
        if (a.prices[0] === b.prices[0]) return a.prices[1] - b.prices[1]
    });
}

console.log(filter(requiredRange1));
console.log(filter(requiredRange2));
console.log(filter(requiredRange3));

console.log(sortByPrice());