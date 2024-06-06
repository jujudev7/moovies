"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FilmCard from "./components/filmCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [films, setFilms] = useState(); // destructuring, on crée des variables à la volée
  const [searchFilm, setSearchFilm] = useState([]);

  const rechercheFilms = async (titre) => {
    const response = await fetch(`${API_URL}&s=${titre}`);
    const data = await response.json(); // on récupère les données de la réponse et on les transforme sous forme .JSON
    console.log(data);
    setFilms(data.Search);
  };

  useEffect(() => {
    rechercheFilms(searchFilm);
  }, [searchFilm]); // ne pas oublier le petit tableau de dépendances

  return (
    <div className="app">
      <h1>Moovies</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher un film"
          value={searchFilm}
          onChange={(e) => setSearchFilm(e.target.value)}
        />
        <Image src="searchIcon.svg" alt="Recherche" width={40} height={40} />
      </div>
      {films?.length > 0 ? (
        <div className="container">
          {films.map((film) => (
            <FilmCard key={film.imdbID} film={film} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>
            Désolé, nous ne trouvons pas de résultat pour votre recherche.
          </h2>
        </div>
      )}
      {/* on vérifie si la liste des films est vide ou non */}
    </div>
  );
}
