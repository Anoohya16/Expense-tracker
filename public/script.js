const addNoteButton = document.getElementById("js-add-btn");
const displayContainer = document.getElementById("js-display-cont");


addNoteButton.addEventListener("click", createNote);

function createNote(){
  
    editBtn.addEventListener("click", ()=>
    {
      if(name_input.disabled || course_input.disabled)
      {
         name_input.disabled = false;
         name_input.focus();
         course_input.disabled =false;
         editBtn.textContent = "Save";
      } else{
        name_input.disabled= true;
        course_input.disabled =true;
        editBtn.textContent = "Edit";
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", deleteContent);

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);
    div.appendChild(buttonContainer);

    displayContainer.appendChild(div);
}

function deleteContent(e)
{
  e.target.closest(".note").remove();
  updateStorage();
}
