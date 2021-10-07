console.log("%cHello stranger! 👋\n\n\n\n\nLooking to improve your dev skills? \n\n\n\n\nLet's do it together 💪 \n\n\n\n\n 👇 Join our group 👇\n\n", "color:dimgrey; font-size: 40px; background-color: pink; border-radius: 10px;");
console.log("%cDiscord Channel:\n\n\n\nhttps://discord.gg/58YEbSgSAc\n\n\n\n", "font-size: 20px");
console.log("%cOur Website: \n\n\n\nhttps://junior-developer-group.com\n\n\n\n", "font-size: 20px");

console.log("%cWe also need designers 😉", "font-size: 40px");
console.log("%c\n\n\n\n\n- Likii & the team 💛", "font-size: 20px");

// simretB05 javascript/ /
const choImages = document.querySelector(".card-cho__container").children;
const content = document.querySelector(".card-cho__text")
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const text = document.querySelectorAll(".card-cho__text")
const tottalText = text.length;
const totalImages = choImages.length;
let index = 0;

prev.addEventListener('click', (e) => {
    // console.log(e)
    e.preventDefault();
    nextImage('prev');
});
next.addEventListener('click', (e) => {
    // console.log(e)
    e.preventDefault();
    nextImage('next');
});


function nextImage(direction) {
    console.log(direction);
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;

        } else {
            index--;
        }
    }
    for (let i = 0; i < choImages.length; i++) {
        choImages[i].classList.remove('show');

    }
    choImages[index].classList.add('show');
}
// simret B05 javascript //