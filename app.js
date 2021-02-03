// const exampleAttr = document.querySelector("#exampleAttr");
// // првоеряет наличие атрибута
// exampleAttr.hasAttribute("id");
// console.log("hasAttribute", exampleAttr.hasAttribute("id")); // применяется к dom элементу

// // получает значение атрибута
// exampleAttr.getAttribute("id");
// console.log("getAttribute", exampleAttr.getAttribute("id"));

// // устанавливаем значение атрибута
// exampleAttr.setAttribute("class", "newClass");
// console.log(exampleAttr);
// // свои аттрибуты можно устанавливать. Перед ними (кастомными атрибутами) нужно ставить "data-..."

// // удаляет атрибут
// // exampleAttr.removeAttribute("id");
// // console.log(exampleAttr);

// // пока показывает data- атрибуты
// console.log(exampleAttr.dataset);

// console.log(exampleAttr.dataset.desk); // увидеть значение всех data-атрибутов

// exampleAttr.dataset.desk = "dsgfsdg";

// // координаты
// console.log(exampleAttr.getBoundingClientRect()); // покажет координаты элемента
// // здесь свойство right = ширина элемента + 8px от margin (считается от левой стороны до правой границы)

// // ===========================================
// const exampleSize = document.querySelector("#exampleSize");
// // найти ближайшего CSS - спозиоционированного родителя
// console.log(exampleSize.offsetParent);
// // найти ближайшего родителя
// console.log(exampleSize.parentElement);

// // позиция в px верхнего левого угла относительно offsetParent (относительно спозиционированного элемента - здесь body)
// console.log(exampleSize.offsetLeft);

// // "внешняя" ширина/высота элемента, включая рамки
// console.log("offsetWidth = ", exampleSize.offsetWidth);
// console.log("offsetHeight = ", exampleSize.offsetHeight);
// //свойства выше работают с элементом

// // свойства ниже работают с контентом
// // расстояние от верхнего левого внешнего угла до внутреннего
// console.log("border = ", exampleSize.clientLeft); // это border

// // ширина/высота содержимого (без border и полосы прокрутки)
// console.log("clientWidth = ", exampleSize.clientWidth); // это ширина контента без border

// // ширина/высота содержимого аналогично clientWidth/Height, но учитывает прокрученную, невидимую область элемента
// console.log("scrollHeight = ", exampleSize.scrollHeight);

// // ширина/высота прокрученной сверху части элемента, считается от верхнего левого угла
// console.log(exampleSize.scrollTop);

// // =========================ВАЖНО==========================

// const scrollBtn = document.querySelector("#scrollBtn");
// const fatBlock = document.querySelector("#fatBlock");
// scrollBtn.addEventListener("click", () => {
//   // window.scrollBy(0, 400); // метод для прокрутки страницы относительно текущего места (0 - по оси Х, 40 - по оси Y)
//   // fatBlock.scrollIntoView(top); // прокручивает страницу вверх или вниз элемента, чтобы он был виден полностью
//   window.scrollTo(0, 0); // переносит на абсолютные координаты страницы
// });

// ================== Задача
// Решение: есть 2 значения! И это отступы слева и справа (откуда до куда).
const drawCard = document.querySelector("#drawCard");
const drawBtn = document.querySelector("#drawBtn");

const drawBlock = (from, up, next, width) => {
  drawCard.innerHTML = "";

  if (up + from > width) {
    debugger;
    drawCard.innerHTML += `<div style="width: ${
      up - next
    }; margin-left:${from}px; height:100px;background-color:red;"></div>`;
    drawCard.innerHTML += `<div style="width:${next}px;margin-left:0; height:100px;background-color:brown;"></div>`;
  } else {
    drawCard.innerHTML += `<div style="width:${up}px;margin-left:${from}px; height:100px;background-color:red;"></div>`;
  }
};

drawBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const inputWidthFrom = +document.querySelector("#inputWidthFrom").value;
  const inputWidthUp = +document.querySelector("#inputWidthUp").value;
  const widthCard = +drawCard.getBoundingClientRect().width;
  let drawWidthFrom = (widthCard / 100) * inputWidthFrom; // размер margin-right (ОТ)
  let drawWidthUp = (widthCard / 100) * inputWidthUp - drawWidthFrom; // размер блока (ДО)

  let nextCard = (widthCard / 100) * Math.abs(inputWidthUp - 100);
  drawBlock(drawWidthFrom, drawWidthUp, nextCard, widthCard);
});
