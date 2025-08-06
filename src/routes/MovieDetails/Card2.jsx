import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://backend-n5by.onrender.com/Movie")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-6">
      {movies.slice(0, 5).map((movie, index) => ( // Show only 5 movies
        <div
          key={movie.id}
          className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeIn"
          style={{animationDelay: `${index * 0.1}s`}}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${movie.main_image})`,
            }}
          ></div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 via-transparent to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Glow Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary-400/50 rounded-2xl transition-all duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary-500/30 to-primary-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-secondary-300 group-hover:to-primary-300 group-hover:bg-clip-text transition-all duration-300">
                {movie.name}
              </h2>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-secondary-600/80 to-secondary-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-secondary-400/30">
                  {movie.category}
                </span>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-yellow-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-white/80 text-xs font-medium">HD</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <div className="flex items-center gap-2 text-white/90 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                  <span className="text-sm font-medium">Watch Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clickable Link */}
          <Link to={`/MovieDetails/${movie.id}`} className="absolute inset-0 z-10"></Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
