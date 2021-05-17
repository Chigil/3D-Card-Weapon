const card = document.querySelector(".card");
const container = document.querySelector(".container");

//UrlImg
const urlDragonLore = "https://www.gameogre.com/wp-content/uploads/2018/10/Dragon-Lore-vs-Lexus-05.png"
const urlAsimov = "https://s-wiki.cs.money/wiki_9FUu5AA_large_preview.png"
const urlTiger = "https://www.csgodatabase.com/images/skins/AWP_Silk_Tiger.png"
const urlFade = "https://i.trbna.com/preset/wysiwyg/c/f3/87150487e11eb9767d03e1d88bea4.jpeg"

//Removing background color element
const circle = document.querySelector(".circle");
const randomBtn = document.querySelector(".random button");

//Colors and arrayColors
let colorDragonLore = "linear-gradient(0.25turn, #ff7d0f, #6ba85d, #58763e)"
let colorAsimov = "linear-gradient(0.25turn, #000000, #e9ffee, #b72a38)"
let colorTiger = "linear-gradient(0.25turn, #fff953, #4fb0b8, #ff8d36)"
let colorFade = "linear-gradient(0.25turn, #ff31ee, #f4fdff, #1a3fff)"
const arrColors = [colorDragonLore, colorAsimov, colorTiger, colorFade]

//arrayImageUrl
const arrImg = [urlAsimov, urlDragonLore, urlTiger, urlFade]

//arraySkinsButton
const skins = document.querySelectorAll('[data-skin]')

//Items
const title = document.querySelector(".title");
const images = document.querySelector(".images img");
const random = document.querySelector(".random");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".weapons");

//forEachButton onclick setImage function
for (let i = 0; i < skins.length; i++) {
    skins[i].addEventListener("click", () => {
        skins.forEach(el => {
            el.classList.remove("active")
        });
        setImage(i);
    });
};

//forEach i element changeText, changeImg, changeClassButton = active
let setImage = (i) => {
    title.innerHTML = skins[i].textContent;
    images.src = arrImg[i];
    skins[i].classList.add("active");
    circle.style.background = arrColors[i];
    randomBtn.style.background = arrColors[i]
};

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    images.style.transform = "translateZ(200px) rotateZ(30deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    random.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    images.style.transform = "translateZ(0px) rotateZ(0deg) ";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    random.style.transform = "translateZ(0px)";
});

//Random Purchase Choice
randomBtn.addEventListener('click', () => {
    skins.forEach(el => {
        el.classList.remove("active")
    });
    setImage(Math.floor(Math.random() * skins.length));
});
