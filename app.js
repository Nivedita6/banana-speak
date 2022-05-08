var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);
function clickEventHandler() {
    console.log("Clicked!");
    console.log("input is: " + txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler);


