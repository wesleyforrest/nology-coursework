students = ["Sasha", "Helen", "Aimee", "Alice"];

const studList = document.querySelector("#student-list");
for (i = 0; i < students.length; i++) {
  studList.innerHTML += `<li>${students[i]}</li>`;
}
const insertStudents = () => {
  for (let i = 0; i < students.length; i++) {
    studList.innerHTML += `<li>${students[i]}</li>`;
  }
};

const button = document.querySelector("#remove-btn");
button.addEventListener("click", () => {
  students.pop();
  insertStudents();
});
