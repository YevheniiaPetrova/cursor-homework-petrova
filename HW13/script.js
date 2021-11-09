const getRandomChinese = async (length) => {

    const result = [];

    while (length) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const sign = Date.now().toString().split('').splice(-5, 5).join('');
                resolve(String.fromCharCode(sign));
            }, 50);
        });

        try {
            const randomChinese = await promise;
            result.push(randomChinese);
        } catch (error) {
            console.log('Error: ', error);
        }

        length--;
    }
    
    console.log(result.join(''));
}

getRandomChinese(4);
