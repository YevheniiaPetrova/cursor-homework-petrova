// Task 1

const newId = document.getElementById('new-id');
const btnNext = document.getElementById('btn-next');

newId.innerHTML = 0;

function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield newId.innerHTML = i++;
    }
}

const idGenerator = createIdGenerator();

btnNext.onclick = function () { idGenerator.next() };


// Task 2

const input = document.getElementById('font-size');

const insertText = (num) => {
    input.innerHTML = `${num}`;
    input.style.fontSize = `${num}px`;
}

function* newFontGenerator(size) {
    while (true) {
        const val = yield size;
    
        if ('up' === val) {
            size += 2;
        } else if ('down' === val) {
            if (size <= 2) {
                console.log('Ви дійшли до мінімального розміру - ', size);
            } else {
                size -= 2;
            }
        }
    }
}

const fontGenerator = newFontGenerator(14); // 14 – стартове значення

document.addEventListener('click', (evt) => {
    if (evt.target.id === "btn-down") {
        insertText(fontGenerator.next("down").value);
    }
    if (evt.target.id === "btn-up") {
        insertText(fontGenerator.next("up").value);
    }
    if (evt.target.id === "btn-value") {
        insertText(fontGenerator.next().value);

    }
})