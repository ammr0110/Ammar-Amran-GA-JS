// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).
// Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
// Maybe the join method will be helpful
const movie = {
  title: "Spider-Man",
  duration: 121,
  director: "Sam Raimi",
  stars: ["Tobey Maguire", "Kristen Dunst", "Willem Dafoe", "James Franco"],
};

console.log(
  `${movie.title} lasts for ${movie.duration} minutes, and was directed by ${
    movie.director
  }. Stars: ${movie.stars.join(", ")}`
);
