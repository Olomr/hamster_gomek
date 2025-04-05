var clicks_value = document.getElementById("asd");
var button =  document.querySelector(".main_btn");
var test = parseInt(localStorage.getItem("test")) || 0;

function add_clicks() {
    test++;
    clicks_value.innerHTML = test;
    localStorage.setItem("test", test);
}
