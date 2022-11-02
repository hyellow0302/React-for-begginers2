import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes={
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
/*
- line7에서 alt를 써주는 이유: 모든 이미지 element들은 alt속성을 가지기 때문이다.
- propType은 받는 Props의 형식을 지정해주는 역할이다.
- Movie.propTypes를 지정해주는 부분에서 genres는 안에 object를 또 가지고 있기때문에 arrayOf를 해주었다!

*/