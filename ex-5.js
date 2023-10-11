const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const totalScore = students.reduce((accumulator, student) => {
    return accumulator + student.score;
  }, 0);
  
  const averageScore = totalScore / students.length;
  return averageScore;
}

const averageScore = getAverageStudentScore(students);
console.log(averageScore) // Output: 87.5
