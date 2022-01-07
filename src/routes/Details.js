import { useParams } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";

function Detail() {
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    console.log(detail);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <img src={detail.medium_cover_image} alt={detail.title} />
      <h2>{detail.title_long}</h2>
      <p>{detail.description_full}</p>
      <p>Rating: {detail.rating}</p>
      <p>Runtime: {detail.runtime} minutes</p>

    </div>
  );
}

export default Detail;
