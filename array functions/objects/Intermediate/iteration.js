// Create an object scores with properties for math, science, and english, each holding a numeric value.
// Use a for...in loop to calculate and print the total score.
var scores = {
    "math" : 96,
    "science" : 92,
    "english" : 91
};
for (marks in scores) {
    var totalScore = scores.math+scores.science+scores.english;
}
console.log(totalScore);