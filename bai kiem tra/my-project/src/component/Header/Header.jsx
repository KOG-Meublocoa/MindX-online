import { useState } from "react";

const Header = ({
  search,setSearch,searchHistory,onSearch,onSelectHistory,page,setPage,}) => {
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      onSearch(search);
      setShowHistory(false);
    }
  };

  return (
    <header className="flex items-center justify-between gap-6">
      <h1
        onClick={() => setPage("home")}
        className="cursor-pointer text-3xl font-bold tracking-wider text-white"
      >
        AniVerse
      </h1>

      <nav className="flex items-center gap-10 text-gray-400">
        <button
          onClick={() => setPage("home")}
          className={page === "home" ? "text-white" : ""}
        >
          Home
        </button>

        <button
          onClick={() => setPage("list")}
          className={page === "list" ? "text-white" : ""}
        >
          List anime
        </button>
      </nav>

      <div className="relative w-80">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowHistory(true)}
            placeholder="Search anime or movie"
            className="w-full rounded-full bg-slate-700 px-5 py-3 text-white outline-none placeholder:text-gray-400"
          />
        </form>

        {showHistory && searchHistory.length > 0 && (
          <div className="absolute z-20 mt-2 w-full rounded-xl bg-slate-700 p-3">
            <p className="mb-2 text-sm text-gray-400">
              Search history
            </p>

            {searchHistory.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelectHistory(item);
                  setShowHistory(false);
                }}
                className="block w-full rounded-lg px-3 py-2 text-left text-white hover:bg-slate-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;