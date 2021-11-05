let newCanvas = document.createElement('canvas');
newCanvas.id = 'canvas';
newCanvas.width = 250;
newCanvas.height = 250;
document.body.append(newCanvas);

const generateBlocks = () => {
    const ctx = document.getElementById('canvas').getContext('2d');

    const generateRGB = () => Math.floor(Math.random() * 256);

    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            ctx.fillStyle = `rgb( ${generateRGB()}, ${generateRGB()}, ${generateRGB()})`;
            ctx.fillRect(j * 50, i * 50, 50, 50);
        }
    }
}

generateBlocks();

// Advanced

const generateBlocksInterval = () => {
    setInterval(() => generateBlocks(), 1000);
}

generateBlocksInterval();