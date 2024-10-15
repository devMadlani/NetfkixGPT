
import React,{ useEffect, useState } from "react";
function VideoTitle(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 const { title, overview, backIMG } = props;
  return (
    <div className="relative mt-12 w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Container for text and image */}
      <div
        className={`text-center flex justify-center items-center transition-transform duration-500 ${
          scrolled ? 'translate-x-0' : 'translate-x-[-55vw] '
        }`}
      >
        {/* Text Section */}
        <div className="flex flex-col gap-12 w-1/2 transition-transform duration-500 transform">
          <div className="w-[550px] m-auto">
            <h1 className="text-6xl font-extrabold mb-2">{title}</h1>
            <p className="text-xl font-semibold font-mono text-left my-4 ml-8">
              {overview}
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="w-24 py-2 rounded-lg border bg-[#f0f0f0]">
              Play
            </button>
            <button className="w-24 py-2 rounded-lg border bg-[#f0f0f0]">
              More Info
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex items-center justify-center transition-transform duration-500 transform">
          <img
            src={backIMG}
            alt="Background"
            className="h-4/5 w-3/5 rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};


export default VideoTitle;
