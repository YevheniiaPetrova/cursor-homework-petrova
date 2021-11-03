class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.status = true;
    }

    getInfo() {
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if (this.status) {
            return this._marks;
        } else {
            return null;
        }
    }

    set marks(mark) {
        if (this.status) {
            this._marks.push(mark);
        } 
    }


    // рісьорчнути чому в сеттері не можна використовувати оператор рест
    // set marks2(...marks) {
    //     for (let mark in marks) {
    //         this._marks.push(mark);
    //     }
    // }


    getAverageMark() {
        if (this.status) {
            const averageMark = this._marks.reduce((sum, mark) => sum + mark, 0) / this._marks.length;
            return averageMark;
        } else {
            return null;
        }
    }

    dismiss() {
        this.status = false;
    }

    recover() {
        this.status = true;
    }
}

// завдання 1, 2 створення студента та вивід повної інформації
const ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Бендер");
console.log(ostap.getInfo());

// завдання 3, 4, 5 створення геттера та сеттера оцінок, підрахунок середнього балу та вивід інфи
console.log(`Оцінки студента ${ostap.fullName}: ${ostap.marks}`);
ostap.marks = 5
console.log(`Оцінки студента ${ostap.fullName}: ${ostap.marks}`);
console.log(`Середня оцінка ${ostap.fullName}: ${ostap.getAverageMark()}`);

// завдання 6, 7 створення методів виключення та поновлення студента, перевірка їх роботи
ostap.dismiss();
console.log(`Оцінки студента ${ostap.fullName} після виключення: ${ostap.marks}`);
console.log(`Середня оцінка ${ostap.fullName} після виключення: ${ostap.getAverageMark()}`);
ostap.recover();
console.log(`Оцінки студента ${ostap.fullName} після поновлення: ${ostap.marks}`);
console.log(`Середня оцінка ${ostap.fullName} після поновлення: ${ostap.getAverageMark()}`);


// Advanced tasks

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.scholarship = 1400;
        setInterval(() => this.getScholarship(), 30000);
    }

    getScholarship() {
        if (this.getAverageMark() >= 4 && this.status) {
            console.log(`Ви отримали ${this.scholarship} грн. стипендії.`);
        } else {
            console.log(`У вас немає стипендії.`);
        }
    }
}

// створення бюджетного студента та виведення інфи
const mariia = new BudgetStudent('Національний університет "Львівська політехніка"', 3, 'Марія Чобіт');
console.log(mariia.getInfo());

// перевірка роботи методів після виключення бюдж.студента
mariia.dismiss();
console.log(`Оцінки студента ${mariia.fullName} після виключення: ${mariia.marks}`);
console.log(`Середня оцінка ${mariia.fullName} після виключення: ${mariia.getAverageMark()}`);
console.log(`Інформація щодо стипендії ${mariia.fullName}:`);
mariia.getScholarship();

// перевірка роботи методів після поновлення бюдж.студента
mariia.recover();
console.log(`Оцінки студента ${mariia.fullName} після поновлення: ${mariia.marks}`);
console.log(`Середня оцінка ${mariia.fullName} після поновлення: ${mariia.getAverageMark()}`);
console.log(`Інформація щодо стипендії ${mariia.fullName}:`);
mariia.getScholarship();

// перевірка отримання стипендії після додавання поганих оцінок
mariia.marks = 2;
console.log(`Всі оцінки: ${mariia.marks}`);
console.log(`Середня оцінка: ${mariia.getAverageMark()}`);
mariia.getScholarship();

mariia.marks = 2;
console.log(`Всі оцінки: ${mariia.marks}`);
console.log(`Середня оцінка: ${mariia.getAverageMark()}`);
mariia.getScholarship();