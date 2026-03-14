const inputLang1 = document.getElementById("inputLang1");
const inputLang2 = document.getElementById("inputLang2");

function saveVocs(){
    let voc1 = inputLang1.value;
    let voc2 = inputLang2.value;

    localStorage.setItem(voc1, voc2)

    inputLang1.value = "";
    inputLang2.value = "";
}