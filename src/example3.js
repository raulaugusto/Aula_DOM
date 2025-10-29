const button = document.getElementById("add_element");
const list = document.getElementById("main_list");
let counter = 0;
button.addEventListener("click", createElement);

function createElement() {
  const newElement = document.createElement("p");
  newElement.innerText = `Novo Elemento ${counter}`;

  newElement.addEventListener("click", () => {
    list.removeChild(newElement);
  });

  list.appendChild(newElement);
  counter++;
}
