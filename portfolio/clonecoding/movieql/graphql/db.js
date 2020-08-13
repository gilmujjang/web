const movies = [
  {
    id:0,
    name: "Star-wars",
    score: 1
  },
  {
    id:1,
    name: "Avengers",
    score: 9
  },
  {
    id:2,
    name: "Godfather",
    score: 7
  },
  {
    id:3,
    name: "Logan",
    score: 0.1
  },
  {
    id:4,
    name: "Shimpson",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if(movies.length > cleanedMovies.length){
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

