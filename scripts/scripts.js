// $(() => {
//     const API_ENDPOINT = 'https://ghibliapi.vercel.app/films'

//     const getFilms = async () => {
//         let response = await fetch(API_ENDPOINT)
//         let data = await response.json()

//         console.log(data[0].image)

//         // $('.ghibli-films').text(data.title)
//     }

//     getFilms()

//     // $('.ghibli-films-button').on('click', getFilms)
// })

// async function fetchData() {

//     try {

//         const ghibliName = document.getElementById('ghibliName').value.toLowerCase();
//         // const response = await fetch(`https://ghibliapi.vercel.app/films/${ghibliName}`);

//         if (ghibliName === '') {
//             return;
//         }

//         const response = await fetch('https://ghibliapi.vercel.app/films/');

//         if(!response.ok) {
//             throw new Error('Could not fetch resource!');
//         }

//         const data = await response.json();

//         const rightFilm = films.find(film => rightFilm.title.toLowerCase() === ghibliName);

//         if (rightFilm) {
//             const ghibliImage = rightFilm.image;
//             const imgElement = document.getElementById('ghibliImage');
//             imgElement.src = ghibliImage;
//             imgElement.style.display = 'block';

//             const descriptionElement = document.getElementById('filmDescription');
//             descriptionElement.innerHTML = `<strong>${rightFilm.title}</strong><br>${rightFilm.description}`;
//         } else {
//             console.log('film not found')
//         }
//         // const ghibliImage = data[0].image;

//     } catch(error) {
//         console.log(error);
//     }

// }

// fetchData();

// const fetchData = async () => {
//     try {
//         const ghibliName = document.getElementById('ghibliName').value.toLowerCase();
//         const response = await fetch('https://ghibliapi.vercel.app/films/');
        
//         const films = await response.json()

//         films.forEach(film => {
//             console.log('Title: ', film.title);
//             console.log('Image.Url: ', film.image);
//         });


//     } catch (error) {
//         console.error('Error fetching films: ', error);
//     }
// }

// fetchData();


//this is the correct functionality

const fetchData = async () => {
    try {
        const ghibliName = document.getElementById('ghibliName').value.toLowerCase();
        
        if(!ghibliName) {
            alert('Please enter a film title!')
            return;
        }

        let url = 'https://ghibliapi.vercel.app/films/';

        if (ghibliName) {
            url += `?title=${encodeURI(ghibliName)}`;
        }
        
        const response = await fetch('https://ghibliapi.vercel.app/films/');
        const films = await response.json()

        const film = films.find(film => film.title.toLowerCase() === ghibliName);

        if (film) {
            const titleElement = document.getElementById('filmTitle');
            titleElement.innerHTML = `<h3>Title: ${film.title}</h3>`;
            
            const originalElement = document.getElementById('originalTitle');
            originalElement.innerHTML = `<h3>Original title: ${film.original_title}</h3>`;
            
            const releaseElement = document.getElementById('releaseDate');
            releaseElement.innerHTML = `<h3>Release date: ${film.release_date}</h3>`;
            
            const descriptionElement = document.getElementById('descriptionInfo');
            descriptionElement.innerHTML = `<p>Description: ${film.description}</p>`;

            const imgElement = document.getElementById('ghibliImage');
            imgElement.src = film.image;
            imgElement.style.display = 'block';
        } else {
            alert('file not found')
        }

        // films.forEach(film => {
        //     console.log('Title: ', film.title);
        //     console.log('Image.Url: ', film.image);
        // });


    } catch (error) {
        console.error('Error fetching films: ', error);
    }
}

fetchData();