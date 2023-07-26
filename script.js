document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const table = document.getElementById("table");
  const tableRows = table.getElementsByTagName("tr");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    for (let i = 1; i < tableRows.length; i++) {
      const row = tableRows[i];
      const rowData = row.textContent.toLowerCase();

      if (rowData.indexOf(searchText) > -1) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
});

// Add event listeners to trash buttons
const trashButtons = document.getElementsByClassName("fa-trash");
for (let i = 0; i < trashButtons.length; i++) {
  trashButtons[i].addEventListener("click", function () {
    const rowToDelete = this.closest("tr");
    rowToDelete.remove();
  });
}

// Function to add a new row to the table
function addRow() {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>New Data</td>
      <td>New Data</td>
      <td>New Data</td>
      <td>New Data</td>
      <td>New Data</td>
      <td>New Data</td>
      <td class="table-actions">
        <div class="table-action-flex">
          <i class="fa-solid fa-eye eyeColor"></i>
          <i class="fa-solid fa-pen penColor"></i>
          <i class="fa-solid fa-trash trashColor"></i>
        </div>
      </td>
    `;
  document.querySelector("tbody").appendChild(newRow);
}

// Example: Call addRow function when a button is clicked
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addRow);
const navMenu = document.querySelector(".nav-menu");

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  // if ((navMenu.style.display = "none")) {
  //   navMenu.style.display = "block";
  // } else if ((navMenu.style.display = "block")) {
  //   navMenu.style.display = "none";
  // }
  setTimeout(() => {
    navMenu.classList.toggle("show");
  }, 200);
});
