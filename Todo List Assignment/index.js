let submit = document.querySelector(".taskAddButton");
var input = document.querySelector("input");
var submitEditButton = document.querySelector(".edit_input_button");
var editInput = document.querySelector(".edit_input");
var editMarkDelete = document.querySelector(".edit_delete_mark");
input.value = "";
var mark = document.querySelector(".mark");
var deleteList = document.querySelector(".delete");

var tasks = document.querySelector("#myUL");
var editDivision = document.querySelector(".edit_division");

submit.addEventListener("click", addItem);
tasks.addEventListener("click", (e) => {
  var targetItem = e.target;
  editMarkDelete.style.display = "block";

  editMarkDelete.addEventListener(
    "click",
    (e) => {
      mark.addEventListener("click", (e) => {
        targetItem.classList.add("complete");
        e.stopPropagation();
      });

      deleteList.addEventListener("click", (e) => {
        targetItem.remove();
        e.stopPropagation();
      });

      editMarkDelete.style.display = "none";
    },
    true
  );
});

function addItem(e) {
  if (input.value != "") {
    appendItem();
  }
}

function appendItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = input.value;

  tasks.appendChild(newItem);
  input.value = "";
}
function editItem(targetItem) {
  targetItem.textContent = "";
}
function deleteItem(e) {
  e.target;
}
function markAsComplete(e) {}
