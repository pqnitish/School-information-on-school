let school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};
// Problem 10: countCalculation
function countCalculation(school) {
  let mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount;
  for (key in school.departments) {
    if (key === "math") {
      mathTeachersCount = school.departments[key].teachers;
      mathStudentsCount = school.departments[key].students;
    } else if (key === "history") {
      historyTeachersCount = school.departments[key].teachers;
      historyStudentsCount = school.departments[key].students;
    }
  }
  return {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount,
  };
}
//console.log(countCalculation(school));
//Problem 11: findTopStudent
function findTopStudent(school, subject) {
  let topStudent;
  let maxScore = 0;
  for (let i = 0; i < school.students.length; i++) {
    // console.log(school.students[i]);
    let student = school.students[i];
    let score = student.scores[subject];
    if (score > maxScore) {
      maxScore = score;
      topStudent = student;
    }
  }
  return topStudent;
}

//console.log(findTopStudent(school, "science"));
//Problem 12: addNewDept
function addNewDept(school, newDepartment) {
  let newSchoolData = { ...school.departments, ...newDepartment };
  return { ...school, departments: newSchoolData };
}
let newDept = {
  art: { teachers: 2, students: 50 },
};
//console.log(addNewDept(school,newDept));
//Problem 13: highestStudentCountDepartment
function highestStudentCountDepartment(school) {
  let heighestDept = "";
  let maxCount = 0;
  for (let key in school.departments) {
    let { students } = school.departments[key];
    if (students > maxCount) {
      maxCount = students;
      heighestDept = key;
    }
  }
  return heighestDept;
}
console.log(highestStudentCountDepartment(school));
//Problem 14: Greeting Message
function generateGreeting(name, language = "English") {
  const greetings = {
    English: `Hello, ${name}!`,
    Spanish: `¡Hola, ${name}!`,
    French: `Bonjour, ${name}!`,
  };

  return greetings[language] || greetings["English"];
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
