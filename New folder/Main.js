var clicks_value = document.getElementById("asd");
var button =  document.querySelector(".image-btn");
var test = parseInt(localStorage.getItem("test")) || 0;

function add_clicks() {
    test++;
    clicks_value.innerHTML = test;
    localStorage.setItem("test", test);
}

button.addEventListener("click", add_clicks);

class homa {
    constructor(name, taps, value) {
    this.name = name;
    this.taps = taps;
    this.value = value;
    }
}

const poor = new homa("Нищета", 1, 50);
const plakiplaki = new homa("Нормис", 2, 100);
const zyza = new homa("Жужа", 5, 200);
const normaldaki = new homa("Ліля", 10, 400);

if(test >= poor.value) {
    console.log("first if");
} if else(test >= plakiplaki.value) {
    console.log("second if")
}
