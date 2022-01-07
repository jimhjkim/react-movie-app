import PropTypes from "prop-types";

function Movie({ coverImg, titleLong, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={titleLong} />
      <h2>{titleLong}</h2>
      <p>{summary}</p>
      {genres ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    titleLong: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie;
