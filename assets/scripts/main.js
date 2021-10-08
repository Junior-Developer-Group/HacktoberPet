/************************ Nikki start ******************************************/
const cardEl = document.querySelector('.nikki_card')

cardEl.addEventListener('click', () => {
  cardEl.classList.toggle('nikki_is_flipped')
})

/********************** Nikki end *****************************************/

/*
|----------------------------------------------------------------------------|
|--------------------------------JAY START-----------------------------------|
|----------------------------------------------------------------------------|
*/
// const dog = document.querySelector(".caucasian_dog");
// const audio = document.querySelector("bark");
// dog.addEventListener("click", () => {
//     console.log("clicked");
// });

const cancel = document.querySelector('.cancel')
const array = document.querySelector('.arr_container')
const left_container = document.querySelector('.left_container')

array.addEventListener('click', () => {
  array.classList.add('active_arr')
  if (left_container.classList.contains('off')) {
    left_container.classList.remove('off')
    left_container.classList.add('active')
  }
})

cancel.addEventListener('click', () => {
  array.classList.remove('active_arr')
  if (left_container.classList.contains('active')) {
    left_container.classList.remove('active')
    left_container.classList.add('off')
  }
})

/*
|----------------------------------------------------------------------------|
|----------------------------------JAY END-----------------------------------|
|----------------------------------------------------------------------------|
*/
