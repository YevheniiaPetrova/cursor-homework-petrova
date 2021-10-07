const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (studentsArr) => {
    const girls = [];
    const boys = [];
    const pairs = [];

    for (let i = 0; i < studentsArr.length; i++){
        let name = studentsArr[i];
        if (name.endsWith('а')) {
            girls.push(name);
        } else {
            boys.push(name);
        }
    }

    for (let j = 0; j < boys.length; j++){
        pairs.push([boys[j], girls[j]]);
    }

    return pairs;
}

const studentPairs = getPairs(students);
console.log(studentPairs); // Task 1


const getThemesForPairs = (pairsArr, themesArr) => {
    const joinedPairsThemes = pairsArr.map((pair, i) => [pair.join(' і '), themesArr[i]]);
    return joinedPairsThemes;
};

const listPairsThemes = getThemesForPairs(studentPairs, themes);
console.log(listPairsThemes); // Task 2


const getMarks = (studentsArr, marksArr) => {
    const studentMarks = studentsArr.map((student, i) => [student, marksArr[i]]);
    return studentMarks;
}

const ratedStudents = getMarks(students, marks);
console.log(ratedStudents); // Task 3

const getRandomMark = () => Math.floor(Math.random() * 5 + 1);
const pairsThemeMark = listPairsThemes.map((pairTheme) => [...pairTheme, getRandomMark()]);
console.log(pairsThemeMark); // Task 4