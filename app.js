var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText = "Nivedita";

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server. Try after some time!");
}

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

console.log(txtInput);
function clickEventHandler() {
    var inputText = txtInput.value; // taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;//output
    })
    //error handling
    .catch(errorHandler);
    //outputDiv.innerText = "Translated baananna " + txtInput.value;
    // console.log("Clicked!");
    // console.log("input is: " + txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler);


