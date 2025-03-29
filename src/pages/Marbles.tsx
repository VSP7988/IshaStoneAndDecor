import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { productImages } from '../config/images';

const marblesGallery = [
  {
      src: "/images/marbles/1.jpg",
      title: ""
    },
    {
      src: "/images/marbles/2.jpg",
      title: ""
    },
    {
      src: "/images/marbles/3.jpg",
      title: ""
    },
    {
      src: "/images/marbles/4.jpg",
      title: ""
    },
    {
      src: "/images/marbles/5.jpg",
      title: ""
    },
    {
      src: "/images/marbles/6.jpg",
      title: ""
    }
];

const Marbles = () => {
  const [index, setIndex] = useState(-1);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);

  const handleDownload = () => {
    setIsButtonAnimating(true);
    // Replace with your actual brochure URL
    window.open('/images/Brochure_Tile,Marble,Spc.pdf', '_blank');
    setTimeout(() => setIsButtonAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${productImages.marbles})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn">
              Exquisite <span className="text-orange-500">Marbles</span>
            </h1>
            <button
              onClick={handleDownload}
              className={`group relative inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-black font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-400 ${
                isButtonAnimating ? 'animate-pulse' : ''
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isButtonAnimating ? 'translate-y-1' : 'group-hover:translate-y-1'
                  }`}
                />
                Download Brochure
              </span>
              <div className="absolute inset-0 bg-orange-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Timeless <span className="text-orange-500">Elegance</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our marble collection represents the pinnacle of natural stone luxury. Each piece is carefully selected from the world's finest quarries, showcasing nature's artistry in its purest form. From the classic veining of Carrara to the bold patterns of Emperador, our marbles add timeless sophistication to any space. Perfect for flooring, countertops, and architectural features, these stones bring an unmatched level of elegance and refinement to both traditional and contemporary designs.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marblesGallery.map((image, i) => (
              <div
                key={i}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setIndex(i)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        slides={marblesGallery}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, .95)' }
        }}
        render={{
          iconPrev: () => <ChevronLeft className="w-6 h-6" />,
          iconNext: () => <ChevronRight className="w-6 h-6" />,
          buttonPrev: (props) => {
            if (!props) return null;
            return (
              <button
                type="button"
                onClick={props.onClick}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-full hover:bg-orange-400 transition-colors duration-300 z-50"
                disabled={!props.onClick}
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
            );
          },
          buttonNext: (props) => {
            if (!props) return null;
            return (
              <button
                type="button"
                onClick={props.onClick}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-full hover:bg-orange-400 transition-colors duration-300 z-50"
                disabled={!props.onClick}
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            );
          }
        }}
      />
    </div>
  );
};

export default Marbles;