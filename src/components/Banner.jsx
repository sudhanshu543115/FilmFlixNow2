import "react";
import banner from "/output.jpg";


function Banner() {
  return (
    <div className="relative min-h-screen flex flex-col-reverse md:flex-row gap-8 justify-center items-center container mx-auto md:px-20 px-4 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-accent-900/20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Left Section */}
      <div className="md:w-1/2 z-10 text-center md:text-left animate-slideInLeft">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
            <span className="text-white">Hello, </span>
            <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent animate-glow">
              welcome!
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium">
              Watch something{" "}
              <span className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent font-bold">
                new every day
              </span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
            Ever thought about how movies are like mirrors? They show us the 
            world the way we want to see it… or sometimes the way we need to see it.
          </p>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center max-w-lg">
            <div className="glass-dark flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 hover:border-secondary-400/50 transition-all duration-300 flex-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-white/70 group-hover:text-secondary-400 transition-colors duration-300"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input 
                type="text" 
                className="grow bg-transparent outline-none text-white placeholder-white/60 font-medium" 
                placeholder="Enter your email..." 
              />
            </div>

            {/* Button */}
            <button 
              className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow animate-glow"
              onClick={() => alert("Thank you for visiting!")}
            >
              Get Started
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Latest Movies</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="font-medium">HD Quality</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="font-medium">Free Streaming</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 z-10 flex justify-center items-center animate-slideInRight">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-glow"></div>
          <img 
            src={banner} 
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-2 border-white/10" 
            alt="Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
