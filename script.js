const headMen = document.querySelector(".header__menu")
const buttonOpen = document.querySelector(".header__menu__icon")


buttonOpen.addEventListener('click', () => {
    headMen.classList.toggle('header__open');
})


let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let set_clock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    seconds.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);

setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec;
 
    // Displaying the time
    document.getElementById(
        "digital1"
    ).innerHTML = currentTime;
    document.getElementById(
        "digital2"
    ).innerHTML = currentTime;
}

function showAboutBlanka() {
    let blanka = document.getElementById("blanka")

    if (blanka.style.display === "block") {
        blanka.style.display = "none";
        document.getElementById('card1').style.height='600px';

      } else {
        blanka.style.display = "block";
        document.getElementById('card1').style.height='720px';
      }
}

function showAboutAndras() {
    let blanka = document.getElementById("andras")

    if (blanka.style.display === "block") {
        blanka.style.display = "none";
        document.getElementById('card2').style.height='600px';

      } else {
        blanka.style.display = "block";
        document.getElementById('card2').style.height='720px';
      }
}

function showAboutDominik() {
    let blanka = document.getElementById("dominik")

    if (blanka.style.display === "block") {
        blanka.style.display = "none";
        document.getElementById('card3').style.height='600px';

      } else {
        blanka.style.display = "block";
        document.getElementById('card3').style.height='720px';
      }
}



let images = ["img/preview16.jpg", "img/red-desert-landscape.jpg", "img/red-sunset-on-tasmanian-farm-.jpg"];
let i = -1;

function changeImage() {
    i = (i + 1) % images.length;
    const imageElement = document.getElementById("image");
    imageElement.src = images[i];
    imageElement.style.display = "block";
    document.getElementById("number").innerHTML = (i + 1) + "/3"
}

function resetImage() {
    const imageElement = document.getElementById("image");
    imageElement.style.display = "none";
    i = -1
    document.getElementById("number").innerHTML = ""
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}