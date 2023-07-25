

const CountDownDate  = new Date(`oct 25,2023 00:00:00`).getTime();

const x = setInterval(function(){
const now = new Date().getTime();
const distance = CountDownDate - now;


const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60 )) /  (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60 )) / 1000);


document.querySelector("#days").innerHTML = days;
document.querySelector("#hours").innerHTML = hours;
document.querySelector("#minutes").innerHTML = minutes;
document.querySelector("#seconds").innerHTML = seconds;

if(distance < 0){
    clearInterval(x);
    document.querySelector("#days").innerHTML = "00";
document.querySelector("#hours").innerHTML = "00";
document.querySelector("#minutes").innerHTML = "00";
document.querySelector("#seconds").innerHTML = "00";
}

},1000)