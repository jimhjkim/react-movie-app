import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
      };
      getDetail();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <h2>{detail.title_long}</h2>
          <p>{detail.description_full}</p>
          <p>Rating: {detail.rating}</p>
          <p>Runtime: {detail.runtime} minutes</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
