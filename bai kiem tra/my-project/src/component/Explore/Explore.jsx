import FeaturedAnime from "../FeaturedAnime/FeaturedAnime";

const Explore = ({ anime }) => {
  return (
    <section className="mt-6">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Explore
      </h2>

      <p className="mb-5 text-lg text-gray-400">
        What are you gonna watch today?
      </p>

      <FeaturedAnime anime={anime} />
    </section>
  );
};

export default Explore;