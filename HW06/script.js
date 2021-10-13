const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


/* Task 1 - Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

const getSubjects = (student) => {
    const subjectsArr = [];
    for (let key in student.subjects) {
        const subject = (key[0].toUpperCase() + key.slice(1).toLowerCase()).replace('_', ' ');
        subjectsArr.push(subject);
    }

    return subjectsArr.join(', ');
}

const studentSubjects = getSubjects(students[0])
console.log(`${students[0].name} is learning ${studentSubjects}.`);


/* Task 2 - Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) */

const getAverageMark = (student) => {
  const marks = [];
  for (let key in student.subjects) {
    const subjMarks = student.subjects[key];
    marks.push(...subjMarks);
  }
  
  const marksSum = marks.reduce((sum, mark) => sum + mark, 0);
  const averageMark = (marksSum / marks.length).toFixed(2);

  return averageMark;
}

const studentAveMark = getAverageMark(students[0]);
console.log(`${students[0].name} average mark is ${studentAveMark}`);


/* Task 3 - Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
ПОвинна бути виведена інформація: курс, ім'я, середня оцінка. */

const getStudentInfo = (student) => {
  const studAveMark = getAverageMark(student);
  const studInfo = {
    course: student.course,
    name: student.name, 
    averageMark: studAveMark
  }
  
  return studInfo;
}

const studentInfo = getStudentInfo(students[0]);
console.log(studentInfo);


// Task 4 - Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (studentsArr) => {
  const studNames = studentsArr.reduce((names, student) => {
    names.push(student.name);
    return names;
  }, []);

  return studNames.sort();
}

const studentsNames = getStudentsNames(students);
console.log(`Students names in alphabet order: ${ studentsNames }`);


// Task 5 - Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (studentsArr) => {
  const ratedStudents = studentsArr.sort((studentA, studentB) => getAverageMark(studentA) - getAverageMark(studentB));
  const bestStudent = ratedStudents[ratedStudents.length - 1];

  return bestStudent.name;
}

const bestStudent = getBestStudent(students);
console.log(`Best student is ${bestStudent}`);


/* Task 6 - Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт,
 в якому ключі це букви у слові, а значення – кількість їх повторень. */

const calculateWordLetters = (word) => {
  const wordArr = word.toLowerCase().split('');
  const numberOfLetters = {};

  wordArr.map(letter => numberOfLetters[letter] ? numberOfLetters[letter]++ : numberOfLetters[letter] = 1);

  return numberOfLetters;
}
 
const wordLetters = calculateWordLetters('тест');
console.log(wordLetters);