    let mainDiv = document.createElement('div');
    mainDiv.className = 'wraper';
    document.body.append(mainDiv);

    let div = document.getElementsByClassName('wraper')[0];

    const generateRGB = () => Math.floor(Math.random() * 256);
    

const generateBlocks = () => {
    div.innerHTML = '';

    for (let i = 0; i < 25; i++) {
        let block = document.createElement('div');
        block.className = 'block';
        block.style.background = `rgb( ${generateRGB()}, ${generateRGB()}, ${generateRGB()})`;
        div.append(block);
    }
}

generateBlocks();


// Advanced
const generateBlocksInterval = () => {
    setInterval(() => generateBlocks(), 1000);
}

generateBlocksInterval();