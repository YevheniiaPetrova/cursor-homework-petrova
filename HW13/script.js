const getRandomChinese = async (length) => {

    const result = '';

    while (length) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5);
                resolve(String.fromCharCode(sign));
            }, 50);
        });

        try {
            const randomChinese = await promise;
            result += randomChinese;
        } catch (error) {
            console.log('Error: ', error);
        }

        length--;
    }
    
    console.log(result);
}

getRandomChinese(4);
