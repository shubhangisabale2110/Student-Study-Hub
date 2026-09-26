/* =========================================================
   STUDYHUB - STUDENT STUDY PORTAL
   JavaScript File
   ========================================================= */


/* ================= SHOW MESSAGE ================= */

function showMessage(subject) {

    alert(
        subject +
        " will be available soon! 📚"
    );

}


/* ================= STUDY PLANNER ================= */

function addTask() {

    const taskInput = document.getElementById("taskInput");

    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();


    // Check if task is empty

    if (taskText === "") {

        alert("Please enter a study task.");

        return;
    }


    // Create new list item

    const listItem = document.createElement("li");


    // Create checkbox

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";


    // Add checkbox and task text

    listItem.appendChild(checkbox);

    listItem.appendChild(
        document.createTextNode(" " + taskText)
    );


    // Add task to list

    taskList.appendChild(listItem);


    // Clear input

    taskInput.value = "";

}


/* ================= PERCENTAGE CALCULATOR ================= */

function calculatePercentage() {

    const obtained =
        parseFloat(
            document.getElementById("obtainedMarks").value
        );

    const total =
        parseFloat(
            document.getElementById("totalMarks").value
        );

    const result =
        document.getElementById("percentageResult");


    // Validate input

    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0 ||
        obtained < 0
    ) {

        result.textContent =
            "Please enter valid marks.";

        return;
    }


    // Obtained marks cannot be greater than total marks

    if (obtained > total) {

        result.textContent =
            "Obtained marks cannot be greater than total marks.";

        return;
    }


    // Calculate percentage

    const percentage =
        (obtained / total) * 100;


    result.textContent =
        "Your Percentage: " +
        percentage.toFixed(2) +
        "%";

}


/* ================= CGPA CALCULATOR ================= */

function calculateCGPA() {

    const sgpa1 =
        parseFloat(
            document.getElementById("sgpa1").value
        );

    const sgpa2 =
        parseFloat(
            document.getElementById("sgpa2").value
        );

    const result =
        document.getElementById("cgpaResult");


    // Validate input

    if (
        isNaN(sgpa1) ||
        isNaN(sgpa2)
    ) {

        result.textContent =
            "Please enter both SGPA values.";

        return;
    }


    // Validate SGPA range

    if (
        sgpa1 < 0 ||
        sgpa1 > 10 ||
        sgpa2 < 0 ||
        sgpa2 > 10
    ) {

        result.textContent =
            "SGPA must be between 0 and 10.";

        return;
    }


    // Calculate CGPA

    const cgpa =
        (sgpa1 + sgpa2) / 2;


    result.textContent =
        "Your CGPA: " +
        cgpa.toFixed(2);

}


/* =========================================================
   POMODORO STUDY TIMER
   Default time = 25 minutes
   ========================================================= */


/* Timer variables */

let timerSeconds = 25 * 60;

let timerInterval = null;


/* ================= UPDATE TIMER ================= */

function updateTimerDisplay() {

    const timer =
        document.getElementById("timer");


    const minutes =
        Math.floor(timerSeconds / 60);


    const seconds =
        timerSeconds % 60;


    const formattedMinutes =
        String(minutes).padStart(2, "0");


    const formattedSeconds =
        String(seconds).padStart(2, "0");


    timer.textContent =
        formattedMinutes +
        ":" +
        formattedSeconds;

}


/* ================= START TIMER ================= */

function startTimer() {

    // Prevent multiple timers

    if (timerInterval !== null) {

        return;
    }


    timerInterval =
        setInterval(function () {

            if (timerSeconds > 0) {

                timerSeconds--;

                updateTimerDisplay();

            }

            else {

                clearInterval(timerInterval);

                timerInterval = null;

                alert(
                    "Study session completed! 🎉 Take a short break."
                );

            }

        }, 1000);

}


/* ================= PAUSE TIMER ================= */

function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

}


/* ================= RESET TIMER ================= */

function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds = 25 * 60;

    updateTimerDisplay();

}


/* ================= CONTACT FORM ================= */

function submitForm(event) {

    // Prevent page refresh

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Check form fields

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert(
            "Please fill in all the fields."
        );

        return;
    }


    // Show success message

    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully. 📚"
    );


    // Clear form

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

}


/* ================= INITIALIZE TIMER ================= */

updateTimerDisplay();