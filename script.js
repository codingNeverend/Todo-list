const form = document.querySelector("#form");
const todo = document.querySelector("#todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todo.value;
  console.log(todoValue);
  let item = `
    <div class='item'>
        <p>${todoValue}</p>
        <button class='btn-delete'>
            <i class='fas fa-trash-alt'></i>
        </button>
        <button class='btn-archive'>
            <i class='fas fa-check-circle'></i>
        </button>
    </div>
    `;
  const listItems = document.querySelector(".list-items");
  listItems.innerHTML += item;

  const btnDelete = document.querySelectorAll(".btn-delete");
  btnDelete.forEach((i) => {
    i.addEventListener("click", () => {
      i.parentElement.remove();
    });
  });

  const btnArchive = document.querySelectorAll(".btn-archive");
  btnArchive.forEach((i) => {
    i.addEventListener("click", () => {
      const parent = i.parentElement;
      parent.classList.toggle("done");
    });
  });

  form.reset();
});
