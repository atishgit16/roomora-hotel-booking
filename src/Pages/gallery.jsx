import React, { useState, useEffect } from 'react';
import Footer from '../Pages/footer';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdZoomOutMap, MdClose } from "react-icons/md";
import Logo from '../assets/logo.png'; // तुमचा local logo path

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data from JSON with 4-second logo display
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/gallery.json")
        .then(res => res.json())
        .then(data => {
          setGalleryItems(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={Logo} alt="Logo" className="w-24 h-24 mb-4 animate-pulse" />
        <p className="text-xl text-gray-700">Loading gallery...</p>
      </div>
    );
  }

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'dining', name: 'Dining' },
    { id: 'spa', name: 'Spa' },
    { id: 'pool', name: 'Pool' },
    { id: 'lobby', name: 'Lobby' },
    { id: 'events', name: 'Events' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  const goToNext = () => {
    setCurrentImage(prev => prev === filteredItems.length - 1 ? 0 : prev + 1);
  };

  const goToPrev = () => {
    setCurrentImage(prev => prev === 0 ? filteredItems.length - 1 : prev - 1);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            alt="Luxury Hotel Lobby"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <div className="w-24 h-1 bg-amber-400 mb-6"></div>
            <p className="text-xl mb-6 max-w-2xl">
              Explore the elegant rooms, world-class dining, relaxing spa, and exclusive experiences that Roomora has to offer.
            </p>
            <div className="inline-flex items-center font-semibold text-lg">
              <Link to="/"><span className="hover:text-amber-300 transition-colors duration-200">Home</span></Link>
              <MdArrowForwardIos className="mx-2 text-sm" />
              <Link to='/gallery'><span className="text-blue-300">Gallery</span></Link>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#E61C5D] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm capitalize">{item.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => openLightbox(index)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                >
                  <MdZoomOutMap className="text-gray-800" />
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <MdZoomOutMap className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl z-10"
            >
              <MdClose className="w-10 h-10 bg-black/50 rounded-full p-2" />
            </button>
            
            <div className="relative max-w-4xl w-full max-h-full">
              <img
                src={filteredItems[currentImage].src}
                alt={filteredItems[currentImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-semibold">{filteredItems[currentImage].title}</h3>
                <p className="text-gray-300 capitalize">{filteredItems[currentImage].category}</p>
              </div>
            </div>
            
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 rounded-full p-2 w-12 h-12 flex items-center justify-center"
                >
                  &#8249;
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 rounded-full p-2 w-12 h-12 flex items-center justify-center"
                >
                  &#8250;
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
