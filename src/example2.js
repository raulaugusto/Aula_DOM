const greenButton = document.getElementById("btn_verde");
const redButton = document.getElementById("btn_vermelho");
const blueButton = document.getElementById("btn_azul");
const mainText = document.getElementById("main_text");

greenButton.addEventListener("click", () => {
  removeClasses();
  mainText.classList.toggle("greenText");
});

redButton.addEventListener("click", () => {
  removeClasses();
  mainText.classList.toggle("redText");
});

blueButton.addEventListener("click", () => {
  removeClasses();
  mainText.classList.toggle("blueText");
});

function removeClasses() {
  mainText.classList.remove("greenText");
  mainText.classList.remove("redText");
  mainText.classList.remove("blueText");
}
