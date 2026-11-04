import AnimeCard from "../AnimeCard/AnimeCard";

const NewRelease = ({ animeList, onSelect }) => {
  return (
    <section className="mt-6">
      <h2 className="mb-4 text-3xl font-bold text-white">
        New Release
      </h2>

      <div className="grid grid-cols-6 gap-5">
        {animeList.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default NewRelease;