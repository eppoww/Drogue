import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); 

const CanvasAnimation = () => {
  // referensi canvas, array gambar, jumlah frame, dan objek untuk mengontrol frame saat ini
  const canvasRef = useRef(null);
  const images = useRef([]);
  const frameCount = 220;
  const ball = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current; 
    const context = canvas.getContext('2d'); 

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // masukin gambar 
    const currentFrame = (index) => `/drogue/${(index + 1).toString().padStart(4, '0')}.webp`;

    // memnambahkan array untuk pengulangan
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current[i] = img;
    }

    // menggambar frame di canvas
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height); 
      context.drawImage(images.current[ball.current.frame], 0, 0, canvas.width, canvas.height); // Menggambar gambar pada canvas
    };

    // Menggambar frame pertama setelah gambar pertama dimuat
    images.current[0].onload = render;

    // Mengatur animasi GSAP untuk mengganti frame berdasarkan scroll
    gsap.to(ball.current, {
      frame: frameCount - 1, // Mengatur animasi dari frame 0 hingga frame 219
      snap: "frame", // Memastikan frame berada di nilai bulat terdekat
      ease: "none", // Tidak menggunakan easing untuk transisi yang mulus
      scrollTrigger: {
        scrub: 0.5, // Mengatur kecepatan animasi sesuai dengan scroll (0.5 = setengah kecepatan)
        pin: canvas, // Menjaga canvas tetap pada posisinya saat pengguna menggulir
        end: "500%", // Mengatur titik akhir animasi pada 500% dari tinggi viewport
      },
      onUpdate: render, // Mengupdate dan menggambar frame saat animasi berlangsung
    });

    // Animasi tambahan untuk memunculkan elemen dengan kelas "headline" saat scroll
    gsap.fromTo(
      ".headline",
      { opacity: 0 }, // Memulai dengan opacity 0 (tidak terlihat)
      {
        opacity: 1, // Mengubah opacity menjadi 1 (terlihat)
        scrollTrigger: {
          scrub: 1, // Mengatur kecepatan perubahan opacity sesuai scroll
          start: "60%", // Memulai animasi saat scroll mencapai 60% dari halaman
          end: "80%", // Mengakhiri animasi saat scroll mencapai 80% dari halaman
        },
      }
    );

    // Menyesuaikan ukuran canvas saat pertama kali dimuat
    resizeCanvas();
    // Menambahkan event listener untuk menyesuaikan ukuran canvas saat jendela diubah ukurannya
    window.addEventListener('resize', resizeCanvas);

    // Membersihkan event listener dan ScrollTrigger saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Hanya menjalankan efek ini sekali, setelah komponen pertama kali di-render

  return (
    <div>
      <canvas ref={canvasRef} className="canvas"></canvas> 
    </div>
  );
};

export default CanvasAnimation;
