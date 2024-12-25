let titleProject = prompt("Название проекта?");
let screensValue = prompt("Какой тип экрана необходим: шаблонные, с уникальным дизайном, с анимациями");

let responsive = prompt("Нужна ли респонсивность? Введите 'да' или 'нет':"); // Вывод сообщения
let booleanValue = responsive.toLowerCase() === 'да';

let service1 = prompt("Какой нужен сервис?");
let servicePrice1 = prompt("Сколько это будет стоить?");

let service2 = prompt("Какой ещё нужен сервис?");
let servicePrice2 = prompt("Сколько будет стоить этот второй сервис?");

let screenPrice = 1000;
let percentage = 10;
let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;

let servicePercentPrice = Math.round(+fullPrice - (+fullPrice / 100 * +percentage));

console.log(servicePercentPrice)

if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%")
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%")
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена")
} else if (fullPrice === 0) {
    console.log("Цена равна нулю. Скидка невозможна.")
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так")
} else {
    console.log("Некорректное значение цены");
}

