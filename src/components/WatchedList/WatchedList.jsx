import WatchedMovie from "../WatchedMovie/WatchedMovie";

/* eslint-disable react/prop-types */
function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedList;
