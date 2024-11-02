const studentsData = [
    {
        rollNumber: "101",
        name: "John Doe",
        marks: [
            { subject: "Math", score: 85 }
        ],
        pdfLink: "pdfs/BSC-CHEMISTRY-50_MCQ'S.pdf"
    },
    {
        rollNumber: "102",
        name: "Jane Smith",
        marks: [
            { subject: "Math", score: 78 },
        ],
        pdfLink: "pdfs/BSC-CHEMISTRY-50_MCQ'S.pdf"
    }
    // Add more student data as needed
];

function getResult() {
    const rollNumber = document.getElementById("rollInput").value.trim();
    const student = studentsData.find(s => s.rollNumber === rollNumber);
    
    if (student) {
        displayResults(student);
    } else {
        alert("Roll number not found. Please try again.");
    }
}

function displayResults(student) {
    const resultSection = document.getElementById("resultSection");
    const resultTable = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
    resultTable.innerHTML = "";

    document.getElementById("studentName").textContent = `Name: ${student.name}`;

    student.marks.forEach(mark => {
        const row = resultTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = mark.subject;
        cell2.textContent = mark.score;
    });

    document.getElementById("downloadBtn").onclick = () => downloadPDF(student.pdfLink);
    resultSection.style.display = "block";
}

function downloadPDF(pdfLink) {
    const link = document.createElement("a");
    link.href = pdfLink;
    link.download = pdfLink.split('/').pop();
    link.click();
}
