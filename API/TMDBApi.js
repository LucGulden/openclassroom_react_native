const API_TOKEN = "7fc7f5b9781a505670d005812778a22f";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromAPI (id) {
    const url = 'https://api.themoviedb.org/3/movie/'+ id + '?api_key=' + API_TOKEN + '&language=fr'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}