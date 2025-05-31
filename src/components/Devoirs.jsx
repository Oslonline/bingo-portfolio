import { useEffect, useRef } from 'react';

function Devoirs() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  
  useEffect(() => {
    const simulateUserInteraction = () => {
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.dispatchEvent(clickEvent);

      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(err => {
            console.log("Lecture auto échouée, mode alternatif:", err.message);

          videoRef.current.muted = true;
          videoRef.current.play().then(() => {
            setTimeout(() => {
              videoRef.current.muted = false;
            }, 500);
          });
        });
      }
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log("Audio autoplay failed:", e.message));
      }
    };

    window.addEventListener('touchstart', simulateUserInteraction, { once: true });
    window.addEventListener('mousedown', simulateUserInteraction, { once: true });
    window.addEventListener('keydown', simulateUserInteraction, { once: true });

    setTimeout(simulateUserInteraction, 100);
    
    return () => {
      window.removeEventListener('touchstart', simulateUserInteraction);
      window.removeEventListener('mousedown', simulateUserInteraction);
      window.removeEventListener('keydown', simulateUserInteraction);
    };
  }, []);
  
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        playsInline
        loop
      >
        <source src="/devoirs/vicouille.mp4" type="video/mp4" />
      </video>

      <audio 
        ref={audioRef} 
        src="/devoirs/vicouille-audio.mp3" 
        loop
      />
    </section>
  );
}

export default Devoirs;