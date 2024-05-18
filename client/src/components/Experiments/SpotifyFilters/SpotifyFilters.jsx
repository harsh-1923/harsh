import React from "react";
import "./SpotifyFilter.css";

const list = ["Playlists", "Artists", "Albums", "Podcasts"];

const FilterItem = ({ item, idx }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <button
      as="button"
      className="filter"
      aria-label={`Filter for ${item}`}
      onClick={() => setSelected(!selected)}
      data-state={`${selected ? "true" : "false"}`}
    >
      {item}
    </button>
  );
};

const SpotifyFilter = ({ filterOptions = list }) => {
  return (
    <div className="spotify-filter">
      <div className="filter-group">
        {list.map((item, idx) => {
          return <FilterItem key={idx} item={item} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default SpotifyFilter;
