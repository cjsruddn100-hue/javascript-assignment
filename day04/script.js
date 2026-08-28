// 02. 버튼의 Click Event 처리
const recommendButton = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendButton.addEventListener("click", () => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});

// 03~05. Form 제출 처리
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 03. 새로고침 막기

  const keyword = searchInput.value.trim(); // 04. 앞뒤 공백 제거

  if (keyword === "") {
    return; // 04. 빈 값이면 결과 표시 안 함
  }

  searchResult.textContent = `검색한 영화: ${keyword}`; // 03. 화면에 표시
  searchInput.value = ""; // 05. 입력창 비우기
});

// 06. forEach()로 영화 목록 Console 출력
const movies = [
  { title: "인셉션", voteAverage: 8.4 },
  { title: "인터스텔라", voteAverage: 8.7 },
  { title: "다크 나이트", voteAverage: 9.0 },
];

movies.forEach((movie) => {
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}점입니다.`);
});

// 07. forEach()로 영화 목록을 화면에 출력
const movieList = document.querySelector("#movie-list");

movies.forEach((movie) => {
  const li = document.createElement("li");
  li.textContent = movie.title;
  movieList.append(li);
});
