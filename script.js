const inputOne = document.getElementById("input-one");
const inputTwo = document.getElementById('input-two');
const displayText = document.getElementById("display-text");
const mixButton = document.getElementById("mix-btn");

mixButton.addEventListener("click", () => {
    let alteredText = " ";
    for(let i=0; i< inputOne.value.length; i++) {
        if(inputOne.value[i] == " ")
        {
            alteredText = alteredText + inputTwo.value
        } else {
            alteredText = alteredText+ inputOne.value[i]
        }
    }
    for(let i=0; i< inputTwo.value.length; i++) {
        if(inputTwo.value[i] == " ")
        {
            alteredText = alteredText + inputTwo.value
        } else {
            alteredText = alteredText+ inputTwo.value[i]
        }
    }
    displayText.innerText = alteredText;
});