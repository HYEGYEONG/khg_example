// URL 파라미터에서 id 추출
const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get("id"), 10);

// 영화 찾기
const movie = movieList.results.find((item) => item.id === movieId);

// HTML 요소에 출력
const container = document.getElementById("movieDetailContainer");

if (movie) {
  container.innerHTML = `
    <div class="row">
      <div class="col-md-5">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid rounded shadow" alt="${movie.title}">
      </div>
      <div class="col-md-7">
        <h2>${movie.title}</h2>
        <p><strong>개봉일:</strong> ${movie.release_date}</p>
        <p><strong>평점:</strong> ⭐ ${movie.vote_average} (${movie.vote_count}명)</p>
        <p><strong>줄거리:</strong> ${movie.overview}</p>
        <a href="index.html" class="btn btn-secondary mt-3">다른영화검색</a>
      </div>
    </div>
  `;
} else {
  container.innerHTML = `<p class="text-danger text-center">영화 정보를 찾을 수 없습니다.</p>`;
}
