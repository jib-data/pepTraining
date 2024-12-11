let submit = document.querySelector(".taskAddButton");
var input = document.querySelector("input");
var submitEditButton = document.querySelector(".edit_input_button");
var editInput = document.querySelector(".edit_input");
var editMarkDelete = document.querySelector(".edit_delete_mark");
input.value = "";

var tasks = document.querySelector("#myUL");
var editDivision = document.querySelector(".edit_division");

submit.addEventListener("click", addItem);
tasks.addEventListener("click", (e) => {
  editMarkDelete.style.display = "block";
  var targetClicked = e.target;
  editMarkDelete.addEventListener("click", (e) => {
    let clickedOption = e.target.textContent;
    console.log(clickedOption);
    if (clickedOption === "Mark") {
      targetClicked.classList.add("complete");
      editMarkDelete.style.display = "none";
    }
    if (clickedOption === "Edit") {
      editDivision.style.display = "block";
      submitEditButton.addEventListener("click", (e) => {
        console.log(editInput.value);
        if (editInput.value != "") {
          targetClicked.textContent = editInput.value;
          editMarkDelete.style.display = "none";
          editInput.value = "";
        }
      });
    }
  });
});

function addItem(e) {
  if (input.value != "") {
    appendItem();
  }
}
function appendItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = input.value;
  //   let list = document.querySelector("#myUL");

  tasks.appendChild(newItem);
  input.value = "";
}
function editItem(targetItem) {
  targetItem.textContent = "";
}
function deleteItem(e) {}
function markAsComplete(e) {}
