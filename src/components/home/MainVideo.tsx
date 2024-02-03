import React, { useState, useEffect } from 'react'

const MainVideo = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const updateScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
    console.log(window.scrollY)
  }, [scrollPosition])

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/5VxYrmnwQiA?si=phIfZYgG0ch3cVi_&controls=0&start=62&autoplay=1&mute=1&disablekb=1&modestbranding=0&showinfo=0&autoplay=1&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '-57px',
          left: '0',
          width: '100%',
          height: '100%',
          border: 'none',
          margin: '0', // 좌우 여백 제거
          padding: '0', //
          pointerEvents: 'none',
        }}
      ></iframe>
    </div>
  )
}

export default MainVideo
