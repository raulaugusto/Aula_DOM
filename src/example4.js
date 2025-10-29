const input = document.getElementById("input");
const button = document.getElementById("modify_text");
const mainText = document.getElementById("main_text");

button.addEventListener("click", () => {
  const text = input.value;
  mainText.innerText = text;
});
