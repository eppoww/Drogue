import React, { useEffect, useRef } from 'react'; 
import logoImg from '/public/assets/images/logo.png'; 
import { gsap } from 'gsap'; 
const Navbar = () => {
  const navbarRef = useRef(null); 

  useEffect(() => {
    // Animasi GSAP 
    gsap.from(navbarRef.current, {
      opacity: 0, // Memulai dengan opacity 0 (tidak terlihat)
      y: -50, // Memulai posisi navbar 50px di atas posisi aslinya
      duration: 1.5, // Durasi animasi selama 1 detik
      ease: 'power3.out', // Menggunakan easing 'power3.out' untuk transisi yang halus
    });

   
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Jika pengguna menggulir ke bawah
        gsap.to(navbarRef.current, {
          y: 0, // Mengembalikan navbar ke posisi aslinya
          opacity: 1, // Mengatur opacity menjadi 1 (terlihat)
          duration: 0.3, // Durasi animasi 0.3 detik
          ease: 'power2.out', // Menggunakan easing 'power2.out' untuk transisi yang cepat
        });
      } else {
        // Jika pengguna menggulir ke atas
        gsap.to(navbarRef.current, {
          y: -100, // Memindahkan navbar 100px ke atas (menyembunyikan)
          opacity: 0, // Mengatur opacity menjadi 0 (tidak terlihat)
          duration: 0.3, // Durasi animasi 0.3 detik
          ease: 'power2.out', // Menggunakan easing 'power2.out' untuk transisi yang cepat
        });
      }
     
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    // Menambahkan event listener untuk menangani scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // useEffect hanya dijalankan sekali saat komponen pertama kali di-render

  return (
    <nav ref={navbarRef} className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Elemen navbar yang diposisikan tetap (fixed) di bagian atas */}
      <div className="flex items-center justify-between rounded-full p-[2px] bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md">
        <div className="flex items-center space-x-4 bg-gray-900/50 rounded-full px-4 py-1">
          
          <div className="flex items-center justify-center w-10 h-10">
            {/* Gambar logo di dalam navbar */}
            <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
          </div>

          <ul className="flex space-x-4 text-white">
            {/* Link navigasi dengan animasi hover */}
            <li className="relative group">
              <a
                href="#hero"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-400 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                href="#about"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-400 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                About
              </a>
            </li>
            <li className="relative group">
              <a
                href="#case"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-400 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Case
              </a>
            </li>
          </ul>

          <div className="flex items-center">
            {/* Tombol navigasi tambahan untuk bagian 3D */}
            <a
              href="#3d"
              className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-yellow-500 transition-all duration-300"
            >
              3D
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
