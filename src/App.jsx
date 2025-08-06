import "react";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./routes/movies/Movies";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MovieDetails from "./routes/MovieDetails/MovieDetails";

import { useState, useEffect } from "react";
import Popup from "./Pop-up/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when the component mounts
    setShowPopup(true);
  }, []);

  return (
    <>
      {/* Popup Overlay */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      
      {/* Main Application */}
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Dynamic Background Blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 right-32 w-96 h-96 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Movie" element={<Movies />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/MovieDetails/:id" element={<MovieDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              borderRadius: '16px',
              padding: '16px',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
