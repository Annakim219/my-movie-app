import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";

function Detail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(data);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <MovieDetail
          key={data.id}
          id={data.id}
          title={data.title_long}
          year={data.year}
          rating={data.rating}
          runtime={data.runtime}
          genres={data.genres}
          description={data.description_full}
          coverImg={data.medium_cover_image}
          bgImg={data.background_image}
        />
      )}
    </div>
  );
}

export default Detail;
