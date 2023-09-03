




// let sliders = document.querySelectorAll(".slider");
// // sliders - список всех элементов с классом class="slider"
// // sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

// for (let i = 0; i < sliders.length; i++) {
//   // Перебирает все, вызывает функцию для каждого.
//   init_slider(sliders[i]);
// }

// function init_slider(slider) {
//   // Значение slider: Очередной sliders[i], переданный при вызове функции.

//   let slide = slider.querySelectorAll(".slide");
//   // Вместо document.query... Получается список всех class="slide"
//   // которые находятся где-то внутри текущего элемента slider.

//   let next = slider.querySelector(".next");
//   // Кнопка next внутри этого slider.
//   let prev = slider.querySelector(".prev");
//   let i = 0;
//   // Номер текущего "открытого" слайда.
//   prev.addEventListener("click", function () {
//     slide[i].classList.remove("show");
//     if (i === 0) {
//       i = slide.length - 1;
//     } else {
//       i = (i - 1) % slide.length;
//     }

//     slide[i].classList.add("show");
//   });
//   next.addEventListener("click", function () {
//     slide[i].classList.remove("show");
//     // slide[i] - открытый слайд. Скрываем.

//     i = (i + 1) % slide.length; // (*1)

//     slide[i].classList.add("show");
//     // slide[i] - следующий слайд. Показываем.
//   });
// }
