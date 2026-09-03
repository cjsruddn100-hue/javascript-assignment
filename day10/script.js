const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  const { title, vote_average, poster_path } = movie;

  const card = document.createElement("div");
  card.className = "movie-card";

  const poster = document.createElement("img");

  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  poster.alt = `${title} 포스터`;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  card.append(poster, titleEl, rating);

  return card;
}

function renderMovies(movies) {
  movies.forEach((movie) => {
    container.append(createMovieCard(movie));
  });
}

async function getPopularMovies() {
  container.textContent = "인기 영화 목록을 불러오는 중...";

  // TODO 1. try / catch 작성하기
  try {
    // TODO 2. 영화 데이터 요청하기
    const response = await fetch(URL, options);

    // TODO 3. Response의 성공 여부 확인하기
    // TODO 심화 01. 실패 Response를 throw로 catch에 전달하기
    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    // TODO 4. Response 데이터 변환하기
    const data = await response.json();

    // TODO 5. Loading 상태 제거하기
    container.textContent = "";

    // TODO 6. 영화 목록 화면에 표시하기
    renderMovies(data.results);
  } catch (error) {
    // TODO 7. 오류 안내 문구 표시하기
    container.textContent = "영화 정보를 불러오지 못했습니다.";

    // TODO 8. 실제 오류 Console에 출력하기
    console.error(error);

    // TODO 심화 02. 다시 시도 버튼 추가하기
    const retryButton = document.createElement("button");

    retryButton.type = "button";
    retryButton.className = "retry-button";
    retryButton.textContent = "다시 시도";

    retryButton.addEventListener("click", () => {
      getPopularMovies();
    });

    container.append(retryButton);
  }
}

getPopularMovies();
