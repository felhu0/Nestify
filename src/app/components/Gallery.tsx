"use client";

import { useEffect, useState } from "react";
import { HomeType } from "../types/home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

type GalleryProps = {
  fetchHome: HomeType | null;
};
const Gallery = ({ fetchHome }: GalleryProps) => {
  const images = fetchHome?.imageUrl || [];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!images || images.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-4 md:gap-8 pt-20 px-5 md:px-24">
      {isMobile && (
        <div className="absolute top-24 left-10 z-10">
          <Link href="/">
            <button className="p-1 rounded-full btn-icon-primary text-link">
              <ArrowBigLeft className="w-6" />
            </button>
          </Link>
        </div>
      )}
      {isMobile ? (
        <Slider {...settings} className="w-full">
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`accommodation image ${index}`}
                className="w-full max-h-52 sm:max-h-80 aspect-square object-cover"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex flex-col sm:flex-col [@media(min-width:768px)]:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={images[0]}
              alt="accommodation"
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full md:w-1/2">
            {images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`accommodation image ${index + 1}`}
                className="w-full aspect-square object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
