import model from "./model.js";
export const createMovie = (movie) => model.create(movie);
export const findAllMovies = () => model.find();
export const findMovieById = (movieId) => model.findById(movieId);
export const findMovieByIMDB = (imdbId) => model.findOne({ imdbId: imdbId });
export const findMovieByTitle = (title) =>
  model.findOne({ title: title });
export const updateMovie = (movieId, movie) =>
  model.updateOne({ _id: movieId }, { $set: movie });
export const incrementLikes = (movieId) => {
  model.findOneAndUpdate({ id: movieId }, { $inc: { likes: 1 } })
};
export const deleteMovie = (movieId) => model.deleteOne({ _id: movieId });