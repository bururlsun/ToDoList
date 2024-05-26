const hero = document.querySelector(".hero");
const main = document.querySelector(".main");
const main2 = document.querySelector(".main2");
const main3 = document.querySelector(".main3");
const createBtn = document.querySelector(".create-btn");
const readBtn = document.querySelector(".read-btn");
const list = document.querySelector(".list");
const table = document.querySelector(".table");
const btnX = document.querySelector(".btn-x");
const contacts = document.querySelector(".contacts");

readBtn.addEventListener("click", () => {
    table.style.display = "block";
});

createBtn.addEventListener("click", () => {
    table.style.display = "block";
});

btnX.addEventListener("click", () => {
    table.style.display = "none";
});

function view() {
    list.innerHTML = "";
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    task.map((el) => {
        list.innerHTML += `
        <div class="all">
          <div scope="row">${el.id}</div>
          <div>
          <img src="${el.url}" alt="img" width=50>
          
          </div>
          <div>${el.title}</div>
          <div>${el.price}</div>
          <div>
          <button class="del-btn btn btn-danger">Delete</button>
          </div>
        </div>
        `;

        main.value = "";
        main2.value = "";
        main3.value = "";
    });
    deleteToDo();
}

view();

function addToDo() {
    if (
        main.value.trim() === "" ||
        main2.value.trim() === "" ||
        main3.value.trim() === ""
    ) {
        alert(404);
    } else {
        let task = JSON.parse(localStorage.getItem("todo")) || [];
        let newTodo = {
            id: task.length ? task[task.length - 1].id + 1 : 1,
            url: main.value,
            title: main2.value,
            price: main3.value,
        };
        let result = [...task, newTodo];
        localStorage.setItem("todo", JSON.stringify(result));
        view();
        input.value = "";
    }
}

createBtn.addEventListener("click", () => {
    addToDo();
});

main.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addToDo();
    }
});
main2.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addToDo();
    }
});
main3.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addToDo();
    }
});

function deleteToDo() {
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    let buttons = document.querySelectorAll(".del-btn");
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            task = task.filter((el, idx) => {
                return index !== idx;
            });
            localStorage.setItem("todo", JSON.stringify(task));
            view();
        });
    });
}
deleteToDo();
