const Button = document.getElementById("btn");
const Ordredlist = document.getElementById("ordredlist");
const Inputfiled = document.getElementById("InputTask");
const isempty = (usertasks) => {
  if (usertasks === "") {
    return true;
  } else {
    return false;
  }
};

const ClearInputBox = () => {
  const UserTasks = document.getElementById("InputTask");
  UserTasks.value = "";
};

const Savethetask = () => {
  const alltask = document.querySelectorAll("li");
  const emptyArr = [];

  for (let index = 0; index < alltask.length; index++) {
    emptyArr[index] = alltask[index].innerText;
  }
  localStorage.setItem("Tasks", JSON.stringify(emptyArr));
};

const getdataformlc = () => {
  return JSON.parse(localStorage.getItem("Tasks"));
};

const CreatheElement = (Tasks) => {
  const CreatetheElement = document.createElement("div");
  CreatetheElement.classList.add("AllTasksList");
  CreatetheElement.innerHTML = `
  
  <li>  ${Tasks}</li>
         <i  class=" Delete fa-solid fa-xmark"></i>`;
  Ordredlist.appendChild(CreatetheElement);
  CreatetheElement.querySelector(".Delete").addEventListener(
    "click",
    function () {
      CreatetheElement.remove();
      Savethetask();
    }
  );
  ClearInputBox();
  Savethetask();

  CreatetheElement.addEventListener(
    "click",
    function () {
      const li = CreatetheElement.querySelector("li");
      if (li) {
        li.style.textDecoration = "line-through";
        CreatetheElement.style.background = "grey";
        setTimeout(() => {
          CreatetheElement.remove();
          Savethetask();
        }, 300);
      }
    },
    { once: true }
  );
};

Inputfiled.addEventListener("keydown", (event) => {
  const UserTasks = document.getElementById("InputTask").value;
  const res = isempty(UserTasks);
  if (event.key === "Enter") {
    if (res) {
      alert("Please Enter the Task !!");
      ClearInputBox();
    } else {
      CreatheElement(UserTasks);
    }
  }
});

(() => {
  const data = getdataformlc();

  for (let index = 0; index < data.length; index++) {
    CreatheElement(data[index]);
  }
})();
