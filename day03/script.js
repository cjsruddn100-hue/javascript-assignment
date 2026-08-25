const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

const message = getMovieMessage("인셉션", 8.4);
console.log(message);

const titleEl = document.querySelector(".title");
titleEl.textContent = "오늘의 추천 영화";

const descriptionEl = document.querySelector(".description");
descriptionEl.classList.add("text-primary", "fw-bold");

const movieList = document.querySelector("#movie-list");

const movieBox = document.createElement("div");
movieBox.textContent = message;
movieBox.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movieBox);

const message2 = getMovieMessage("인터스텔라", 8.7);

const movieBox2 = document.createElement("div");
movieBox2.textContent = message2;
movieBox2.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movieBox2);

