import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import MessageBox from "../../Chatbot.jsx/Message";

function Homemovies() {
  const [Movie, setMovie] = useState([]);

 

  useEffect(() => {
    const getMovie = async () => {
      try {
          //const res = await axios.get("http://localhost:4004/Movie");
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/Movie`);

        console.log(res.data);
  
        // Sort movies by release_date in descending order
        const sortedMovies = res.data.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateB - dateA; // Descending order
        });

        setMovie(sortedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <div className="pt-32 pb-20 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-8">
            <span className="text-white">We're delighted to have you </span>
            <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent animate-glow">
              Here! 
            </span>
            <span className="text-4xl">✨</span>
          </h1>
          
          <div className="mb-8">
            <MessageBox/>
          </div>

          <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Our Telegram
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </a>
        </div>

        {/* Movies Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
              Latest Movies
            </h2>
            <div className="h-1 flex-1 mx-6 bg-gradient-to-r from-secondary-500 via-primary-500 to-accent-500 rounded-full opacity-30"></div>
          </div>
          
          <div className="grid gap-4">
            {Movie.slice(0, 10).map((item, index) => ( // Display only the first 10 items
              <div key={item.id} className="animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                <Cards item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-12">
        <Link to="/Movie">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View All Movies
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </Link>
        </div>
    </>
  );
}

export default Homemovies;
