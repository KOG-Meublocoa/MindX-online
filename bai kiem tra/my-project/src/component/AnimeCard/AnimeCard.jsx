const AnimeCard = ({ anime, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(anime)}
      className="group w-full cursor-pointer"
    >
      <div className="relative  overflow-hidden rounded-lg">
        <img
          src={anime.image}
          alt={anime.movieName}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <p className="absolute bottom-3 left-0 w-full text-center text-white">
          Episode {anime.episode}
        </p>
      </div>

      <h3 className="mt-2 text-center text-sm font-semibold text-white">
        {anime.movieName}
      </h3>
    </div>
  );
};

export default AnimeCard;