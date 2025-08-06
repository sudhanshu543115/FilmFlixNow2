import React from "react";

function Footer() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-800 to-transparent pointer-events-none"></div>
      
      <footer className="relative glass-dark border-t border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-20 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center animate-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-shadow bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent">
                  FilmFlixNow
                </h3>
              </div>
              
              <p className="text-white/80 leading-relaxed max-w-md">
                Your ultimate destination for the latest movies and entertainment. 
                Experience cinema like never before with high-quality streaming and downloads.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">HD Quality</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm font-medium">Fast Downloads</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm font-medium">Latest Releases</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white font-display">Quick Links</h4>
              <nav className="flex flex-col space-y-3">
                <a href="/about" className="text-white/70 hover:text-secondary-400 transition-colors duration-300 font-medium hover:translate-x-2 transform">
                  About Us
                </a>
                <a href="/contact" className="text-white/70 hover:text-secondary-400 transition-colors duration-300 font-medium hover:translate-x-2 transform">
                  Contact
                </a>
                <a href="/Movie" className="text-white/70 hover:text-secondary-400 transition-colors duration-300 font-medium hover:translate-x-2 transform">
                  All Movies
                </a>
                <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary-400 transition-colors duration-300 font-medium hover:translate-x-2 transform">
                  Telegram Channel
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white font-display">Follow Us</h4>
              <div className="flex flex-col gap-4">
                <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 glass-dark rounded-xl border border-white/10 hover:border-secondary-400/50 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Telegram</p>
                    <p className="text-white/60 text-sm">Join our channel</p>
                  </div>
                </a>

                <div className="grid grid-cols-3 gap-3">
                  {/* Twitter */}
                  <a href="#" className="group p-3 glass-dark rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current text-white/70 group-hover:text-blue-400 transition-colors duration-300 mx-auto">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="#" className="group p-3 glass-dark rounded-xl border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:scale-110 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current text-white/70 group-hover:text-red-400 transition-colors duration-300 mx-auto">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="#" className="group p-3 glass-dark rounded-xl border border-white/10 hover:border-blue-600/50 transition-all duration-300 hover:scale-110 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current text-white/70 group-hover:text-blue-600 transition-colors duration-300 mx-auto">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-white/70 font-medium">
                  Copyright © 2024 - All rights reserved by{" "}
                  <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent font-bold">
                    FilmFlixNow
                  </span>
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Made with ❤️ for movie enthusiasts worldwide
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a href="#" className="text-white/70 hover:text-secondary-400 transition-colors duration-300 text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/70 hover:text-secondary-400 transition-colors duration-300 text-sm font-medium">
                  Terms of Service
                </a>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group p-2 glass-dark rounded-lg border border-white/10 hover:border-secondary-400/50 transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white/70 group-hover:text-secondary-400 transition-colors duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </footer>
    </div>
  );
}

export default Footer;
