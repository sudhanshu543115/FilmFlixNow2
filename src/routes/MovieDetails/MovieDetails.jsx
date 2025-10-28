import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import img from "/public/image-loader.gif";
import Card2 from "./Card2";





function MovieDetails() {
  
// new released movies section from the


  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`https://backend-eq2w.onrender.com/Movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie details");
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-dark p-8 rounded-2xl border border-red-500/20 text-center animate-fadeIn">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-red-400 mb-2">Error Loading Movie</h3>
          <p className="text-white/80">{error}</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-dark p-8 rounded-2xl border border-white/10 text-center animate-fadeIn">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center animate-spin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Loading Movie Details</h3>
          <p className="text-white/60">Please wait while we fetch the movie information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-accent-900/20 pointer-events-none"></div>
      
      <div className="relative container mx-auto pt-32 pb-20 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Movie Poster */}
          <div className="relative group animate-slideInLeft">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow"></div>
            <img
              src={movie.main_image}
              alt={movie.name}
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-2 border-white/10 group-hover:border-secondary-400/50 transition-all duration-500 transform group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>

          {/* Movie Details */}
          <div className="space-y-8 animate-slideInRight">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 leading-tight">
                {movie.name}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"></div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed font-medium">
              {movie.details}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-dark p-6 rounded-2xl border border-white/10">
                <h3 className="text-secondary-400 font-semibold mb-2 text-sm uppercase tracking-wider">Category</h3>
                <p className="text-white text-lg font-medium">{movie.category}</p>
              </div>

              <div className="glass-dark p-6 rounded-2xl border border-white/10">
                <h3 className="text-secondary-400 font-semibold mb-2 text-sm uppercase tracking-wider">Language</h3>
                <p className="text-white text-lg font-medium">{movie.language}</p>
              </div>

              <div className="glass-dark p-6 rounded-2xl border border-white/10">
                <h3 className="text-secondary-400 font-semibold mb-2 text-sm uppercase tracking-wider">Release Date</h3>
                <p className="text-white text-lg font-medium">{new Date(movie.release_date).toLocaleDateString()}</p>
              </div>

              <div className="glass-dark p-6 rounded-2xl border border-white/10">
                <h3 className="text-secondary-400 font-semibold mb-2 text-sm uppercase tracking-wider">Actors</h3>
                <p className="text-white text-lg font-medium">{movie.actors}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              {movie.Download && (
                <a href={movie.Download} target="_blank" rel="noopener noreferrer">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden w-full">
                    <span className="relative z-10 flex items-center gap-3 justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download Movie - All Qualities Available
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </a>
              )}

              <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden w-full">
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Join Our Telegram Channel
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="relative py-20 container mx-auto px-4 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Screenshots 
            <span className="text-accent-400 ml-2">(Coming Soon)</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative group">
              <div className="glass-dark rounded-2xl p-4 border border-white/10 hover:border-accent-400/30 transition-all duration-300 group-hover:scale-105">
                <img 
                  src={img} 
                  alt="Loading..." 
                  className="w-full h-32 object-cover rounded-xl opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/60 text-center">
                    <div className="w-8 h-8 mx-auto mb-2 animate-spin">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                    <p className="text-sm">Loading</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="relative py-20 container mx-auto px-4 md:px-20">
        <div className="glass-dark rounded-3xl p-8 md:p-12 border border-white/10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
            Want to Watch in Full HD? 📺
          </h3>
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
            अगर आप कोई MOVIE FULL HD में देखना चाहते हैं तो आप हमारे टेलीग्राम चैनल से जुड़ें, 
            संदेश देकर मूवी का नाम और क्वालिटी बताएं, आपकी मूवी तुरंत मिल जाएगी.... 😊
          </p>
          <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Telegram Channel
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </a>
        </div>
      </div>

      {/* Recently Released Movies Section */}
      <div className="relative py-20 container mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            Recently Released 
            <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent ml-2">
              Movies
            </span>
            <span className="text-2xl ml-2">🎬</span>
          </h2>
          <div className="h-1 flex-1 mx-6 bg-gradient-to-r from-secondary-500 via-primary-500 to-accent-500 rounded-full opacity-30"></div>
        </div>
        
        <div className="animate-fadeIn">
          <Card2 />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
