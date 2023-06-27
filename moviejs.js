
const apikey = '2b35fe5a583656cc9fff74222cbd3a51';
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=2b35fe5a583656cc9fff74222cbd3a51&query=`;
const IMGPATH = 'https://image.tmdb.org/t/p/w500/';
const APILINK = `https://api.themoviedb.org/3/discover/movie?api_key=2b35fe5a583656cc9fff74222cbd3a51&sort_by=popularity.desc&page=1`;

const main = document.getElementById("movielist"); 
const form = document.getElementById("form");
const input = document.getElementById("search_query");

returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(results => results.json()).
    then(function(data){
        data.results.forEach(element => {
            
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');
            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            const title = document.createElement('h3');
            title.setAttribute('class', 'movietitle');

            title.innerText = `${element.title}`;
            image.alt = element.title;
            let img_path = IMGPATH+element.poster_path;
            if(element.poster_path!=null) {
                image.src = img_path;
                div_card.appendChild(image);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);
                main.appendChild(div_row);
            }
        });
    });
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    main.innerHTML = '';

    const search_item = input.value;
    if(search_item){
        returnMovies(SEARCHAPI + search_item);
        input.value='';
    }
});