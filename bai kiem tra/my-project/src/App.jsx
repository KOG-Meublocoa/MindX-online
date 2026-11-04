import { useState, useEffect } from "react";

import Header from "./component/Header/Header.jsx";
import Explore from "./component/Explore/Explore.jsx";
import NewRelease from "./component/NewRelease/NewRelease.jsx";
import AnimeCard from "./component/AnimeCard/AnimeCard.jsx";

import { animeData } from "./data/animeData";

const App = () => {
  
  const [selectedAnime, setSelectedAnime] = useState(animeData[0]);
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("searchHistory")) || [];
  });

  const [page, setPage] = useState("home");
  useEffect(() => {
    localStorage.setItem(
      "searchHistory",
      JSON.stringify(searchHistory)
    );
  }, [searchHistory]);

  
  const handleSearch = (value) => {
    const keyword = value.trim();

    if (!keyword) return;

    setSearch(keyword);

    setSearchHistory((prev) => [
      keyword,
      ...prev.filter(
        (item) => item.toLowerCase() !== keyword.toLowerCase()
      ),
    ].slice(0, 5));

    setPage("list");
  };

  
  const handleSelectHistory = (value) => {
    setSearch(value);
    handleSearch(value);
  };

  
  const filteredAnime = animeData.filter((anime) =>
    anime.movieName.toLowerCase().includes(search.toLowerCase())
  );

  
  const handleSelectAnime = (anime) => {
    setSelectedAnime(anime);
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-[#191f23] px-8 py-5">
      <div className="mx-auto max-w-[1350px]">
        <Header
          search={search}
          setSearch={setSearch}
          searchHistory={searchHistory}
          onSearch={handleSearch}
          onSelectHistory={handleSelectHistory}
          page={page}
          setPage={setPage}
        />

        {page == "home" && (
          <>
            <Explore anime={selectedAnime} />

            <NewRelease
              animeList={animeData}
              onSelect={handleSelectAnime}
            />
          </>
        )}

        {page == "list" && (
  <section className="mt-8">
    <h2 className="mb-6 text-3xl font-bold text-white">
      List Anime
    </h2>

    <div className="grid grid-cols-6 gap-5">
      {filteredAnime.map((anime) => (
        <AnimeCard
          key={anime.id}
          anime={anime}
          onSelect={handleSelectAnime}
        />
      ))}
    </div>

    {filteredAnime.length == 0 && (
      <p className="text-gray-400">
        Không tìm thấy anime phù hợp.
      </p>
    )}
  </section>
)}
      </div>
    </div>
  );
};

export default App;