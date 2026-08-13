const fs = require("fs");

let passed = true;

if (fs.existsSync("index.html")) {
    console.log("TC-01 : index.html exists : PASS");
} else {
    console.log("TC-01 : index.html exists : FAIL");
    passed = false;
}

if (fs.existsSync("style.css")) {
    console.log("TC-02 : style.css exists : PASS");
} else {
    console.log("TC-02 : style.css exists : FAIL");
    passed = false;
}

if (fs.existsSync("script.js")) {
    console.log("TC-03 : script.js exists : PASS");
} else {
    console.log("TC-03 : script.js exists : FAIL");
    passed = false;
}

if (fs.existsSync("student.json")) {
    console.log("TC-04 : student.json exists : PASS");
} else {
    console.log("TC-04 : student.json exists : FAIL");
    passed = false;
}

const students = JSON.parse(fs.readFileSync("student.json", "utf8"));
const student = students[0];

if (student.name.trim() !== "") {
    console.log("TC-05 : Name Validation : PASS");
} else {
    console.log("TC-05 : Name Validation : FAIL");
    passed = false;
}

if (student.email.includes("@")) {
    console.log("TC-06 : Email Validation : PASS");
} else {
    console.log("TC-06 : Email Validation : FAIL");
    passed = false;
}

if (student.mobile.length === 10) {
    console.log("TC-07 : Mobile Validation : PASS");
} else {
    console.log("TC-07 : Mobile Validation : FAIL");
    passed = false;
}

if (student.branch !== "") {
    console.log("TC-08 : Branch Validation : PASS");
} else {
    console.log("TC-08 : Branch Validation : FAIL");
    passed = false;
}

if (student.password.length >= 6) {
    console.log("TC-09 : Password Validation : PASS");
} else {
    console.log("TC-09 : Password Validation : FAIL");
    passed = false;
}

if (passed) {
    console.log("TC-10 : Registration Successful : PASS");
    console.log("Build SUCCESS");
    process.exit(0);
} else {
    console.log("TC-10 : Registration Successful : FAIL");
    console.log("Build FAILED");
    process.exit(1);
}