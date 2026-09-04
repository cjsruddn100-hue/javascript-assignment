const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const POPULAR_TV_URL =
  "https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const container = document.querySelector("#movie-list");
const resultInfo = document.querySelector("#result-info");

// TV 프로그램 카드 하나 만들기 (TV는 title이 아니라 name)
function createTVCard(tv) {
  const { name, vote_average, poster_path } = tv;

  const card = document.createElement("div");
  card.className = "movie-card";

  const poster = document.createElement("img");
  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";
  poster.alt = `${name} 포스터`;

  const titleEl = document.createElement("h3");
  titleEl.textContent = name;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  card.append(poster, titleEl, rating);

  return card;
}

function renderTVShows(tvShows) {
  tvShows.forEach((tv) => {
    container.append(createTVCard(tv));
  });
}

// 화면 진입하자마자 인기 TV 목록 + 로딩 처리
async function getPopularTVShows() {
  container.textContent = "인기 TV 프로그램을 불러오는 중...";

  try {
    const response = await fetch(POPULAR_TV_URL, options);

    if (!response.ok) {
      container.textContent = "정보를 불러오지 못했습니다.";
      return;
    }

    const data = await response.json();

    container.textContent = "";
    renderTVShows(data.results);
  } catch (error) {
    container.textContent = "정보를 불러오지 못했습니다.";
    console.error(error);
  }
}

// 검색 폼 제출
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = input.value.trim();

  // 03. 빈 검색어면 요청 없이 종료
  if (!keyword) {
    return;
  }

  // 심화 02. 2글자 미만이면 안내 후 종료
  if (keyword.length < 2) {
    resultInfo.textContent = "검색어를 2글자 이상 입력해 주세요.";
    return;
  }

  searchTVShows(keyword);
});

async function searchTVShows(keyword) {
  // 04. 검색어 인코딩 + search/tv URL 만들기
  const encodedKeyword = encodeURIComponent(keyword);
  const url = `https://api.themoviedb.org/3/search/tv?query=${encodedKeyword}&language=ko-KR&page=1`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      container.textContent = "정보를 불러오지 못했습니다.";
      return;
    }

    // 05. json 변환 + 확인
    const data = await response.json();
    console.log(data.results);

    // 06. 기존 목록 비우기
    container.textContent = "";

    // 07. 검색 결과 없을 때 처리
    if (data.results.length === 0) {
      resultInfo.textContent = "";
      container.textContent = "검색 결과가 없습니다.";
      return;
    }

    // 심화 01. 검색 결과 개수 표시
    resultInfo.textContent = `검색 결과 ${data.results.length}건`;

    // 08. 검색 결과 그리기
    renderTVShows(data.results);
  } catch (error) {
    container.textContent = "정보를 불러오지 못했습니다.";
    console.error(error);
  }
}

// 화면 진입 시 인기 TV 로드
getPopularTVShows();
