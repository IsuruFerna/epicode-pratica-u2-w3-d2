const namePlacer = document.getElementById("name");
const btnSave = document.getElementById("btn-save");
const btnRemove = document.getElementById("btn-remove");
const input = document.getElementById("input-name");

// if there's already a name in localStorage get it and place in the above of the input field
const currentName = localStorage.getItem("name");
if (currentName) {
   namePlacer.innerText = currentName;
}

// when save button is clicked place the input value at the top of it
btnSave.addEventListener("click", () => {
   const name = input.value;
   if (name) {
      localStorage.setItem("name", name);
      namePlacer.innerText = name;
      input.value = "";
   }
});

// if there's a name saved in localStorage remove it
btnRemove.addEventListener("click", () => {
   if (localStorage.getItem("name")) {
      localStorage.removeItem("name");
      namePlacer.innerText = "";
   }
});
