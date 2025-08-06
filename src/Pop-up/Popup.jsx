import  "react";

// eslint-disable-next-line react/prop-types
const Popup = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 transition-all duration-500 animate-fadeIn"
    >
      <div className="relative glass-dark p-8 md:p-12 rounded-3xl shadow-2xl max-w-md mx-4 text-center border border-white/20 animate-slideInLeft transform scale-95 hover:scale-100 transition-transform duration-300">
        {/* Background Effects */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-secondary-500/30 to-primary-500/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-accent-500/30 to-secondary-500/30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full glass-dark border border-white/20 hover:border-red-400/50 text-white/70 hover:text-red-400 transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo/Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center shadow-lg animate-glow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>

          {/* Welcome Message */}
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Welcome to 
            <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent ml-2">
              FilmFlixNow!
            </span>
          </h2>

          {/* Loading Message */}
          <div className="glass-dark p-4 rounded-2xl border border-orange-500/20 mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-orange-400 font-semibold">Loading Movies...</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Please wait a moment while we load the latest movies for you. 
              <br />
              <span className="text-orange-300 font-medium">Please be patient!</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 mb-8 leading-relaxed">
            Discover and enjoy the best movies and TV shows in high quality. 
            Your entertainment journey starts here! 🎬✨
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="group relative px-6 py-3 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden flex-1"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                Let's Go!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer">
              <button className="group relative px-6 py-3 glass-dark border border-white/20 hover:border-secondary-400/50 text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <span className="flex items-center gap-2 justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Join Channel
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
