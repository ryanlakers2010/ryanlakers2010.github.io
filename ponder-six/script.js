// --- Custom Console Logger ---
function logToConsole(message) {
  const consoleBox = document.getElementById('consoleLog');
  const timestamp = new Date().toLocaleTimeString();
  consoleBox.textContent += `[${timestamp}] ${message}\n`;
  consoleBox.scrollTop = consoleBox.scrollHeight;
  console.log(message);
}

// --- Activity 1: Grade Conversion & GPA ---
function convert(grade) {
  let points = 0;
  switch (grade.toUpperCase()) {
    case 'A': points = 4; break;
    case 'B': points = 3; break;
    case 'C': points = 2; break;
    case 'D': points = 1; break;
    case 'F': points = 0; break;
    default:
      alert('Please enter a valid grade letter (A, B, C, D, F).');
      return null;
  }
  return points;
}

let grades = ['A', 'B', 'A'];

function updateGpaDisplay() {
  const points = grades.map(convert).filter(p => p !== null);
  const totalPoints = points.reduce((total, p) => total + p, 0);
  const gpa = points.length ? (totalPoints / points.length).toFixed(2) : '0.00';

  document.getElementById('gradesDisplay').textContent = JSON.stringify(grades);
  document.getElementById('pointsDisplay').textContent = JSON.stringify(points);
  document.getElementById('gpaDisplay').textContent = gpa;

  logToConsole(`Activity 1 Update -> Grades: [${grades.join(', ')}] | GPA: ${gpa}`);
}

document.getElementById('addGradeBtn').addEventListener('click', () => {
  const input = document.getElementById('gradeInput');
  const val = input.value.trim().toUpperCase();
  if (val && ['A', 'B', 'C', 'D', 'F'].includes(val)) {
    grades.push(val);
    input.value = '';
    updateGpaDisplay();
  } else {
    alert('Invalid grade. Please enter A, B, C, D, or F.');
  }
});


// --- Activity 2: Word Length Filter ---
const initialWords = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function updateWordsFilter() {
  const maxLength = parseInt(document.getElementById('maxLengthInput').value) || 6;
  const filteredWords = initialWords.filter(word => word.length < maxLength);

  document.getElementById('wordsDisplay').textContent = JSON.stringify(filteredWords);
  logToConsole(`Activity 2 Filter (< ${maxLength} chars) -> Output: [${filteredWords.join(', ')}]`);
}

document.getElementById('filterWordsBtn').addEventListener('click', updateWordsFilter);


// --- Activity 3: Index Search ---
const numbersArray = [12, 34, 21, 54];

function updateIndexSearch() {
  const target = parseInt(document.getElementById('searchNumberInput').value);
  const foundIndex = numbersArray.indexOf(target);
  const displayElement = document.getElementById('indexDisplay');

  if (foundIndex !== -1) {
    displayElement.textContent = `Index ${foundIndex}`;
    logToConsole(`Activity 3 Search -> Value ${target} found at index ${foundIndex}`);
  } else {
    displayElement.textContent = `Not Found (-1)`;
    logToConsole(`Activity 3 Search -> Value ${target} not found in array`);
  }
}

document.getElementById('searchBtn').addEventListener('click', updateIndexSearch);


// --- Activity 4: Template Literals & Student Roster ---
let students = [
  { last: 'Andrus', first: 'Aaron' },
  { last: 'Masa', first: 'Manny' },
  { last: 'Tanda', first: 'Tamanda' }
];

function studentTemplate(student) {
  return `<li><strong>${student.first} ${student.last}</strong></li>`;
}

function renderStudentRoster() {
  const listContainer = document.getElementById('studentList');
  const studentListHtml = students.map(studentTemplate).join('');
  listContainer.innerHTML = studentListHtml;

  logToConsole(`Activity 4 Render -> Student list updated (${students.length} students)`);
}

document.getElementById('addStudentBtn').addEventListener('click', () => {
  const firstInput = document.getElementById('firstNameInput');
  const lastInput = document.getElementById('lastNameInput');

  const first = firstInput.value.trim();
  const last = lastInput.value.trim();

  if (first && last) {
    students.push({ first, last });
    firstInput.value = '';
    lastInput.value = '';
    renderStudentRoster();
  } else {
    alert('Please enter both a first and last name.');
  }
});


// --- Console Clear ---
document.getElementById('clearConsoleBtn').addEventListener('click', () => {
  document.getElementById('consoleLog').textContent = '';
});


// --- Initial Executions on Load ---
window.addEventListener('DOMContentLoaded', () => {
  logToConsole('Application initialized.');
  updateGpaDisplay();
  updateWordsFilter();
  updateIndexSearch();
  renderStudentRoster();
});
