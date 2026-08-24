const movies = [
  { id: 1, title: "인셉션", voteAverage: 8.4 },
  { id: 2, title: "인터스텔라", voteAverage: 8.7 },
  { id: 3, title: "다크 나이트", voteAverage: 9.0 },
  { id: 4, title: "테넷", voteAverage: 7.3 },
];

for (const movie of movies) {
  if (movie.voteAverage >= 8) {
    console.log(movie.title);
  }
}
