const baseUrl = 'https://swapi.dev/api/';
const header = document.getElementById('header');
const list = document.getElementById('list');
const planetNumber = document.getElementById('number');
const lang = document.getElementById('lang');

let planetUrl = "https://swapi.dev/api/planets/";
let wookiee = false;
let movie = '2';



const getCharacterInfo = (item) => {
    if (wookiee) {
        axios
        .get(`${item}/?format=wookiee`)
        .then((response) => {
            const characterInfo =`<div class="character">
                                        <h3>${response.data.whrascwo}</h3>
                                        <p>rhahrcaoac_roworarc: ${response.data.rhahrcaoac_roworarc}</p>
                                        <p>rrwowhwaworc: ${response.data.rrwowhwaworc}</p>
                                    </div>`;
            
            list.innerHTML += characterInfo;
        })
        .catch((err) => {
            console.log('Error: ', err);
        });
    } else {
        axios
            .get(item)
            .then((response) => {

                const characterInfo =`<div class="character">
                                            <h3>${response.data.name}</h3>
                                            <p>Birth: ${response.data.birth_year}</p>
                                            <p>Gender: ${response.data.gender}</p>
                                        </div>`;
                
                list.innerHTML += characterInfo;
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    }
}


const getMovieCharacters = (number) => {
    header.innerHTML = "loading...";

        axios
            .get(`${baseUrl}films/${number}`)
            .then((response) => {
                const movie = `<h2>Персонажі ${response.data.episode_id} епізоду - ${response.data.title}:</h2>`
                    header.innerHTML = movie;

                response.data.characters.map((item) => {
                    list.innerHTML = '';
                    getCharacterInfo(item)
                });
            })
            .catch((err) => {
                console.log(`Error: `, err);
                list.innerHTML = `Error occured :(`;
            })
    
}


const getPlanets = () => {
    planetNumber.innerHTML = "loading...";


    axios
        .get(planetUrl)
        .then((response) => {
            planetNumber.innerHTML = `<h2>Всього планет: ${response.data.count}</h2>`;

            const planetList = response.data.results.map(item => `<div class="planet">
                                                                    <h3>${item.name}</h3>
                                                                </div>`);
            planets.innerHTML = planetList.join('');

            if (response.data.previous !== null) {
                planets.innerHTML += '<button class="info" id="prev">Попередні</button>'
            }
            if (response.data.next !== null) {
                planets.innerHTML += '<button class="info" id="next">Наступні</button>'
            }

        })
        .catch((err) => {
            console.log(`Error: `, err);
            planet.innerHTML = `Error occured :(`;
        })
}


const getNextPlanets = async() => {
    await axios
        .get(planetUrl)
        .then((response) => planetUrl = response.data.next)
        .catch((err) => {
            console.log(`Error: `, err);
            planets.innerHTML = `Error occured :(`;
        })
    
    getPlanets();
}

const getPrevPlanets = async() => {
    await axios
        .get(planetUrl)
        .then((response) => planetUrl = response.data.previous)
        .catch((err) => {
            console.log(`Error: `, err);
            planets.innerHTML = `Error occured :(`;
        })
    
    getPlanets();
}


document.addEventListener('click', (evt) => {
    if (evt.target.id === 'charInfo') {
        getMovieCharacters(movie);
    }
    if (evt.target.id === 'planetList') {
        planetUrl = "https://swapi.dev/api/planets/";
        getPlanets();
    }
    if (evt.target.id === 'episod-number') {
        movie = evt.target.value;
    }
    if (evt.target.id === 'next') {
        getNextPlanets();
    }
    if (evt.target.id === 'prev') {
        getPrevPlanets();
    }
    if (evt.target.id === 'lang') {
        wookiee = !wookiee;
        if (wookiee) {
            lang.classList.add('green')
        } else {
            lang.classList.remove('green')
        }
    }
})