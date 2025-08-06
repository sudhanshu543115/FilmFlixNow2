import  "react";
import about from "/ill-think-about-it.jpg" 

function About() {
  return (
    <div className="min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-accent-900/20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      {/* Header Section */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 animate-fadeIn">
            About 
            <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent ml-4">
              FilmFlixNow
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slideInLeft">
            Discover the story behind your favorite movie streaming destination
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative">
        <section className="container mx-auto px-4 md:px-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src={about}
                  alt="About FilmFlixNow"
                  className="relative w-full rounded-3xl shadow-2xl border-2 border-white/10 group-hover:border-secondary-400/50 transition-all duration-500 transform group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
            
            <div className="space-y-8 animate-slideInRight">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6 font-display">
                  <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
                    Who We Are
                  </span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  At FilmFlixNow, we bring the magic of movies to your screens. Whether you're into the latest
                  blockbusters, timeless classics, or indie gems, we have it all. Our mission is to provide you with a seamless
                  streaming experience, offering access to thousands of movies and TV shows at the touch of a button.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                    What We Do
                  </span>
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our platform offers a curated collection of films and series across multiple genres. From drama to
                  sci-fi, we ensure that you can always find something to suit your mood. With FilmFlixNow, enjoy high-quality
                  streaming, personalized recommendations, and features like watchlists, reviews, and much more.
                </p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Our Vision
                  </span>
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  We envision a world where entertainment is not only accessible but also enjoyable. A world where
                  the power of storytelling can transport you to new realms, teach you valuable lessons, and connect you with
                  others who share your passion. FilmFlixNow strives to create an immersive environment that lets you dive
                  deep into the world of cinema.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                Why Choose 
                <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent ml-2">
                  FilmFlixNow?
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-dark p-8 rounded-2xl border border-white/10 text-center group hover:border-secondary-400/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">High Quality Streaming</h3>
                <p className="text-white/70">Experience crystal clear HD and 4K quality streaming with minimal buffering.</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border border-white/10 text-center group hover:border-accent-400/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-accent-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Downloads</h3>
                <p className="text-white/70">Download your favorite movies and shows for offline viewing at lightning speed.</p>
              </div>

              <div className="glass-dark p-8 rounded-2xl border border-white/10 text-center group hover:border-primary-400/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.628 25.628 0 012.916.52 6.003 6.003 0 00-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Latest Releases</h3>
                <p className="text-white/70">Stay up-to-date with the newest movies and TV shows added regularly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-20">
            <div className="glass-dark rounded-3xl p-12 md:p-16 border border-white/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
                Our 
                <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent ml-2">
                  Mission
                </span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                At FilmFlixNow, we believe in the power of cinema to inspire, entertain, and connect people. Our mission is
                to curate an ever-expanding library of movies and TV shows that users can access anytime, anywhere, and enjoy
                without barriers. We're here to create a platform that feels like home for movie lovers everywhere.
              </p>
              
              <div className="mt-12">
                <a href="https://t.me/filmflixnow" target="_blank" rel="noopener noreferrer">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Join Our Community
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
