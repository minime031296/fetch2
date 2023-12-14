let myForm = document.getElementById("form");
let Name = document.getElementById("name");
let Age = document.getElementById("age");

// Initialize localStorage with an empty array if it doesn't exist
if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify([]));
}

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let obj = {
        Name: Name.value,
        Age: Age.value,
    };

    // Retrieve existing data from Local Storage
    let storage = JSON.parse(localStorage.getItem("user")) || [];

    // Add the new data to the array
    storage.push(obj);

    // Save the updated array back to Local Storage
    localStorage.setItem("user", JSON.stringify(storage));

    // Clear the form fields
    myForm.reset();
});

function displayData() {
    let storage = JSON.parse(localStorage.getItem("user")) || [];
    let dataTable = document.getElementById("dataTable");

    // Clear previous table content
    dataTable.innerHTML = "";

    // Create table headers
    let headerRow = document.createElement("tr");
    let thName = document.createElement("th");
    thName.textContent = "Name";
    let thAge = document.createElement("th");
    thAge.textContent = "Age";
    headerRow.appendChild(thName);
    headerRow.appendChild(thAge);
    dataTable.appendChild(headerRow);

    // Clear table rows (except for the header)
    while (dataTable.rows.length > 1) {
        dataTable.deleteRow(1);
    }

    // Populate the table with stored data
    storage.forEach((data) => {
        let row = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = data.Name;
        let tdAge = document.createElement("td");
        tdAge.textContent = data.Age;
        row.appendChild(tdName);
        row.appendChild(tdAge);
        dataTable.appendChild(row);
    });
}


