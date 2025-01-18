const AddButton = document.getElementById("btn");
const NotesContainer = document.querySelector(".NotesTakingContainer");
let index = 0;
AddButton.addEventListener("click", () => {
  CreateNewNotes();
});

const deletenotes = (notes) => {
  notes.remove();
  savenotes();
};
const savenotes = (notes) => {
  const alltextarea = document.querySelectorAll("textarea");
  const emptyarr = [];
  for (let idx = 0; idx < alltextarea.length; idx++) {
    emptyarr[idx] = alltextarea[idx].value;
  }
  localStorage.setItem("Notes", JSON.stringify(emptyarr));
};
const CreateNewNotes = (text = "") => {
  const notes = document.createElement("div");
  notes.classList.add("InnnerContainer");
  NotesContainer.appendChild(notes);
  notes.innerHTML = ` <div id="tools">
                <i  class="save fa-solid fa-floppy-disk fa-xl"></i>
                <i class="delete fa-solid fa-trash fa-xl"></i>
            </div>
            <textarea>${text}</textarea>`;
savenotes();
  notes.querySelector(".delete").addEventListener("click", () => {
    deletenotes(notes);
  });

  notes.querySelector(".save").addEventListener("click", () => {
    savenotes(notes);
  });
};

(function getdata() {
  const lsnotes = JSON.parse(localStorage.getItem("Notes"));
  for (let index = 0; index < alltext.length; index++) {
    CreateNewNotes(alltext[index]);
  }
})();
