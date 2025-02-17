const fetchData = async () => {
    try {
        const ghibliName = document.getElementById('ghibliName').value.toLowerCase();
        
        
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
            console.timeLog('Film not found, Please enter a Ghibli film title.')
        }

      

    } catch (error) {
        console.error('Error fetching films: ', error);
    }
}

fetchData();