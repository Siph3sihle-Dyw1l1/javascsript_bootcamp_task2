let studList = [];

function determineStudentResults() {

    let name = document.getElementById("name").value;
    let mark = parseInt(document.getElementById("mark").value);

    
    if (name.trim() === "") {
        document.getElementById("results").innerHTML =
            "<p style='color:red'>Please enter a name.</p>";
        return;
    }

    if (isNaN(mark) || mark < 0 || mark > 100) {
        document.getElementById("results").innerHTML =
            "<p style='color:red'>Mark must be between 0 and 100.</p>";
        return;
    }

    let outcome = "";
    let grade = "";

    if (mark >= 0 && mark <= 49) {
        outcome = "<span style='color:red'>FAIL</span>";
        grade = "Fail";
    } else if (mark >= 50 && mark <= 64) {
        outcome = "<span style='color:green'>PASS</span>";
        grade = "Pass";
    } else if (mark >= 65 && mark <= 79) {
        outcome = "<span style='color:green'>PASS</span>";
        grade = "Merit";
    } else {
        outcome = "<span style='color:green'>PASS</span>";
        grade = "Distinction";
    }

    let student = {
        name: name,
        mark: mark,
        outcome: outcome,
        grade: grade
    };

    studList.push(student);

    document.getElementById("results").innerHTML = `
        <p>
            Result: ${outcome} - Grade: ${grade}
        </p>
    `;
}

function viewStudList() {

    let listContainer = document.getElementById("list_of_student");

    
    listContainer.innerHTML = "";

    let heading = document.createElement("h2");
    heading.textContent = "Students List";

    listContainer.appendChild(heading);

    let ul = document.createElement("ul");

    for (let i = 0; i < studList.length; i++) {

        let li = document.createElement("li");

        li.innerHTML =
            studList[i].name + " - " +
            studList[i].mark + " - " +
            studList[i].outcome + " - " +
            studList[i].grade;

        ul.appendChild(li);
    }

    listContainer.appendChild(ul);
}