let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
for (let etudient in students){
    console.log(students[etudient]);
}
for (let etudient in students){
    console.log(students[etudient].firstName);
}
for (let etudient in students){
    console.log(students[etudient].age);
}
for (let etudient in students){
    console.log(students[etudient].firstName + " habite à " + students[etudient].city + " , a " + students[etudient].age + " ans");
}