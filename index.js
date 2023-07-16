// 1. Необходимо вывести сообщение в консоль "все теги прогрузились",
// когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () =>
console.log('все теги прогрузились'));

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", 
// когда все ресурсы страницы будут загружены.

window.addEventListener('load', () =>
console.log('страница загрузилась'));

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', event => {
    const clickSuperElement  = event.target.classList.contains('super_element') ? 'присутствует' : 'отсутствует';
    const tagSuperElement = event.target.tagName;
    console.log(`Класс "super_element" ${clickSuperElement} в элементе "${tagSuperElement.toLowerCase()}".`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
// "Вы навели на textarea."

document.addEventListener('mouseover', event => {
    const mouseTextarea = event.target.tagName;
    if (mouseTextarea.toLowerCase() == 'textarea') console.log(`Вы навели на textarea.`);
});

//  5. Необходимо повесить событие клика на тег ul.
//  В обработчике события в консоль необходимо выводить текст,
//  который записан внутри элемента кнопки, по которой был произведен клик.
//  Если клик был не по кнопке, то ничего выводить не нужно.
//  Необходимо использовать делегирование.

document.querySelector('ul').addEventListener('click', event => {
    const tagClickUl = event.target.tagName.toLowerCase();
    if (tagClickUl == 'button') console.log(event.target.textContent);
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом 
// выводится текст из 3 задания, если мы кликаем по кнопкам в ul? 
// Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Клик по одному из элементов ul выводится в консоль первее, 
// так как он является обработчиком кнопки и его 
// событие как бы распространяется наружу, от узла, где оно случилось, 
// до его родительского и далее до корня документа

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const changeBackground = document.querySelectorAll('li');
for (let i = 0; i < changeBackground.length; i++) {
    if (i % 2 !== 0) changeBackground[i].style.backgroundColor = '#6666FF';
}