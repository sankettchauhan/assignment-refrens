import PropTypes from "prop-types";
import { useState } from "react";

Card.propTypes = {
  character: PropTypes.object.isRequired,
  episodes: PropTypes.array.isRequired,
};

export default function Card({ character, episodes }) {
  const {
    name,
    gender,
    image,
    location: { name: current },
    origin: { name: origin },
    species,
    status,
    type,
  } = character;

  const [showEpisodes, setShowEpisodes] = useState(false);

  console.log("character: ", character);
  console.log("episodes: ", episodes);
  return (
    <div className="flex rounded-[30px] overflow-hidden bg-white/10 h-[fit-content]">
      <div className="basis-1 grow shrink">
        <img src={image} alt={name} />
      </div>
      <div className="p-4 basis-1 grow shrink text-white/40 font-bold h-100">
        {showEpisodes ? (
          <>
            <div className="text-white">Episodes that {name} featured in</div>
            {episodes.map((e, i) => (
              <h3 key={`${e}-${i}`} className="text-sm leading-4">
                {e.episodeNumber}. {e.episodeName}
              </h3>
            ))}
            <button
              className="underline"
              onClick={() => setShowEpisodes(false)}
            >
              Go back
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-2 text-white">{name}</h2>
            {/* conditionally apply blue/red based on gender */}
            <h3
              className={`font-bold ${
                gender === "Male" ? "text-blue-500" : "text-[#ff7890]"
              }`}
            >
              <span className="mr-4">{gender}</span>
              {/* conditionally apply green/red based on gender */}
              <span
                className={`${
                  status === "Alive" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status}
              </span>
            </h3>
            <h3>
              Current location: <span className="text-white">{current}</span>
            </h3>
            <h3>
              Origin: <span className="text-white">{origin}</span>
            </h3>
            <h3>
              Species: <span className="text-white">{species}</span>
            </h3>
            {type && (
              <h3>
                Type: <span className="text-white">{type}</span>
              </h3>
            )}
            <button
              className="underline text-sm mt-auto"
              onClick={() => setShowEpisodes(true)}
            >
              Show episodes {name} featured in!
            </button>
          </>
        )}
      </div>
    </div>
  );
}
