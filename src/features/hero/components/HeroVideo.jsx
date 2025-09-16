import React, { useState } from 'react'

const HeroVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videos = ['/assets/videos/hero/b2.mp4', '/assets/videos/hero/b3.mp4']

  const switchVideo = (direction) => {
    if (direction === 'next') {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    } else {
      setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    }
  }

  return (
    <>
      <video 
        key={currentVideoIndex}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] brightness-90"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional: Video navigation buttons */}
      {videos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[4] flex gap-2">
          <button 
            onClick={() => switchVideo('prev')}
            className="bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            ‹
          </button>
          <button 
            onClick={() => switchVideo('next')}
            className="bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            ›
          </button>
        </div>
      )}
      
      {/* Video indicators */}
      <div className="absolute bottom-4 right-4 z-[4] flex gap-1">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentVideoIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  )
}

export default HeroVideo
