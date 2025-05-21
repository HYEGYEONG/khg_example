const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");
const container = document.getElementById("movieContainer");


function Search() {
  const keyword = input.value.trim().toLowerCase();
  var rs = movieList.results.filter(function(movie){
    return movie.title.toLowerCase().includes(keyword)
  });
  MoviesList(rs);
}

function MoviesList(movies) {
  container.innerHTML = "";

  if (movies.length === 0) {
    container.innerHTML = `<p class="text-center">검색 결과가 없습니다.</p>`;
    return;
  }

  movies.forEach((movie) => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

    col.innerHTML = `
    <a href="detail.html?id=${movie.id}" class="text-decoration-none">
      <div class="card h-100 shadow-sm">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text text-truncate">${movie.overview}</p>
        </div>
      </div>
       </a>
    `;

    container.appendChild(col);
  });
}


//MoviesList(movieList.results);
