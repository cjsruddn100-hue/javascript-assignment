// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

async function getNowPlaying() {
  // 03. fetch로 요청을 보내고 응답을 기다림
  const response = await fetch(URL, options);

  // 04. 받은 데이터를 JavaScript 값으로 변환
  const data = await response.json();

  // 05. 첫 번째 영화 가져오기
  const firstMovie = data.results[0];

  // 06. 제목과 평점을 구조 분해 할당으로 가져오기
  const { title, vote_average } = firstMovie;

  console.log("제목:", title);
  console.log("평점:", vote_average);
}

getNowPlaying();
