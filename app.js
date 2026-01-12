document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("current-year").textContent = new Date().getFullYear();

  const main = document.getElementById("main-content");
  main.innerHTML = "";

  departments.forEach((dept) => {
    const section = document.createElement("section");
    section.className = "department";

    const h2 = document.createElement("h2");
    h2.textContent = dept.name;

    const ul = document.createElement("ul");
    ul.className = "employee-list";

    dept.employees.forEach((emp) => {
      const li = document.createElement("li");

      const fullText = emp.lastName
        ? `${emp.firstName} ${emp.lastName}`
        : emp.firstName;

      li.textContent = fullText;
      ul.appendChild(li);
    });

    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
  });
});