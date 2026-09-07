let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
let compteurAdmis = 0;
let compteurNonAdmis = 0;
for (let etudient in students) {
    console.log(students[etudient].name);
}
for (let etudient in students) {
    console.log("note : " + students[etudient].note);
}
for (let etudient in students) {
    if (students[etudient].note >= 10) {
        console.log("Admis");
        compteurAdmis++
    } else {
        console.log("Non admis");
        compteurNonAdmis--
    }
}
console.log(compteurAdmis);
console.log(compteurNonAdmis * -1);