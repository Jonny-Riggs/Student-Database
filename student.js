const StudentDatabase = {}

StudentDatabase.students = []

StudentDatabase.students.push(
    {
        name: "Ron Bailey",
        birthplace: "Nashville, TN",
        gender: "M"
    },
    {
        name: "Jonathan Bain",
        birthplace: "Knoxville, TN",
        gender: "M"
    },
    {
        name: "Nelson Bailey",
        birthplace: "Cookeville, TN",
        gender: "F"
    },
    {
        name: "Taylore Elwick",
        birthplace: "Gallatin, TN",
        gender: "F"
    },
    {
        name: "April Bailey",
        birthplace: "Clarksville, TN",
        gender: "F"
    },
    {
        name: "Mindy Carter",
        birthplace: "Goodlettsville, TN",
        gender: "F"
    },
    {
        name: "Georgia Carter",
        birthplace: "Millersville, TN",
        gender: "M"
    },
    {
        name: "Jackson Riggs",
        birthplace: "Nashville, TN",
        gender: "M"
    },
)

localStorage.setItem("Student Database", JSON.stringify(StudentDatabase))