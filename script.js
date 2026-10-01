function calculateGrade() {
    const studentName = document.getElementById("studentName").value;
    const subject = document.getElementById("subject").value;

    const prelim = Number(document.getElementById("prelim").value);
    const midterm = Number(document.getElementById("midterm").value);
    const final = Number(document.getElementById("final").value);

    const result = document.getElementById("result");

    if (
        studentName === "" ||
        subject === "" ||
        isNaN(prelim) ||
        isNaN(midterm) ||
        isNaN(final)
    ) {
        result.innerHTML = "⚠️ Please complete all fields.";
        return;
    }

    const average = (prelim + midterm + final) / 3;

    let remarks;

    if (average >= 75) {
        remarks = "✅ PASSED";
    } else {
        remarks = "❌ FAILED";
    }

    result.innerHTML = `
        <strong>Student Grade Result</strong><br><br>
        Student: ${studentName}<br>
        Subject: ${subject}<br>
        Prelim: ${prelim}<br>
        Midterm: ${midterm}<br>
        Final: ${final}<br>
        Average: <strong>${average.toFixed(2)}</strong><br>
        Remarks: <strong>${remarks}</strong>
    `;
}

function clearForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("prelim").value = "";
    document.getElementById("midterm").value = "";
    document.getElementById("final").value = "";
    document.getElementById("result").innerHTML = "";
}
