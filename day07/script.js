// DAY07 과제 - 구조 분해 할당 / 옵셔널 체이닝 / 널 병합 연산자

const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

// 01. 객체 구조 분해 할당하기
const { title, vote_average } = movie;
console.log("제목:", title); // 제목: Fight Club
console.log("평점:", vote_average); // 평점: 8.4

// 02. 새로운 변수 이름으로 할당하기
const { title: movieTitle } = movie;
console.log(movieTitle); // Fight Club

// 03. 배열 구조 분해 할당하기
const [firstGenre, secondGenre] = genres;
console.log(firstGenre); // Drama
console.log(secondGenre); // Thriller

// 04. 존재하지 않는 속성 안전하게 가져오기
const director = movie.detail?.director;
console.log(director); // undefined

// 05. 기본값 사용하기 (널 병합 연산자 ??)
const directorName = director ?? "감독 정보 없음";
console.log(directorName); // 감독 정보 없음

// 06. || 와 ?? 의 차이 확인하기
const { vote_count } = movie;
console.log(vote_count || 100); // 100 (0은 Falsy라서 오른쪽 100 사용)
console.log(vote_count ?? 100); // 0  (0은 null/undefined가 아니라서 기존 0 사용)
