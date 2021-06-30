function press(num) {
    var result = document.getElementById("res");
    result.value += num

}

function clr() {
    var result = document.getElementById("res");
    result.value = "";
}

function getresult() {
    var result = document.getElementById("res");
    result.value = eval(result.value);
}













