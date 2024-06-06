import Image from "next/image";

const FilmCard = ({ film }) => {
  return (
    <div className="film">
      <p className="film-date">{film.Year}</p>
      <Image
        className="film-img"
        src={
          film.Poster !== "N/A"
            ? film.Poster
            : "https://via.placeholder.com/300"
        }
        alt={film.Title}
        width={300}
        height={400}
      />
      <div className="film-infos">
        <span>{film.Type} </span>
        <h3>{film.Title} </h3>
      </div>
    </div>
  );
};

export default FilmCard;
