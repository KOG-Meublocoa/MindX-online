const FeaturedAnime = ({ anime }) => {
  return (
    <div
      className="relative h-[325px] overflow-hidden rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${anime.image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-8 left-10 max-w-xl text-white">
        <h2 className="mb-4 text-3xl font-bold">
          {anime.movieName}
        </h2>

        <p className="line-clamp-3 text-sm leading-6">
          {anime.description}
        </p>
      </div>
    </div>
  );
};

export default FeaturedAnime;