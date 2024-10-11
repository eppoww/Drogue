import React, { useEffect } from 'react'; 
import gsap from 'gsap'; 
import VanillaTilt from 'vanilla-tilt'; 


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-700 dark:from-neutral-900 dark:to-neutral-800 to-neutral-600"></div>
);

// Komponen grid untuk mengatur tata letak item Bento
const BentoGrid = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
};

// Komponen untuk setiap item dalam grid
const BentoGridItem = ({ title, description, image, link, className }) => {
  useEffect(() => {

    gsap.fromTo(
      '.bento-item', // Target elemen dengan kelas 'bento-item'
      { opacity: 0, y: 20 }, // Memulai dengan opacity 0 dan posisi Y 20px lebih rendah dari posisi awal
      {
        opacity: 1, // Menampilkan item dengan opacity 1
        y: 0, // Mengembalikan posisi Y ke posisi semula
        duration: 1, // Durasi animasi 1 detik
        ease: 'power2.out', // Menggunakan easing 'power2.out' untuk transisi yang halus
        scrollTrigger: {
          trigger: '.bento-item', // Menentukan elemen yang akan memicu animasi saat di-scroll
          start: 'top 80%', // Animasi dimulai saat elemen berada 80% dari bagian atas viewport
        },
      }
    );


    VanillaTilt.init(document.querySelectorAll('.bento-item'), {
      max: 15, // Maksimum sudut tilt adalah 15 derajat
      speed: 400, // Kecepatan tilt 400ms
      glare: true, // Menambahkan efek glare
      'max-glare': 0.3, // Maksimum intensitas glare adalah 0.3
    });
  }, []);

  return (
    <a
      href={link} // Link untuk item grid
      target="_blank" // Membuka link di tab baru
      rel="noopener noreferrer" // Keamanan link eksternal
      className={`bento-item bg-black dark:bg-black p-6 rounded-lg shadow-lg border border-gray-700 ${className}`}
    >
      <div className="relative mb-4 overflow-hidden rounded-md">
        {image && (
          <img
            src={image} // Menampilkan gambar yang terkait dengan item
            alt={title} // Alt text untuk gambar
            className="w-full h-40 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
            // Gambar dengan efek hover untuk memperbesar
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-75 transition-opacity duration-300"></div>
        {/* Overlay dengan efek opacity untuk gambar */}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white hover:text-purple-400 transition-colors duration-300">
        {title} {/* Menampilkan judul item */}
      </h3>
      <p className="text-sm text-gray-400 dark:text-gray-300">
        {description} {/* Menampilkan deskripsi item */}
      </p>
    </a>
  );
};


export const BentoGridDemo = () => {
  return (
    <BentoGrid className="max-w-6xl mx-auto px-4 mb-12 mt-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i} 
          title={item.title} // Menyediakan judul untuk item
          description={item.description} // Menyediakan deskripsi untuk item
          image={item.image} // Menyediakan gambar untuk item
          link={item.link} // Menyediakan link untuk item
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
};

// Data untuk item yang akan ditampilkan di grid
const items = [
  {
    title: "International Drug Network Bust in Indonesia", // Judul item
    description: "Indonesian authorities successfully arrested an international drug network operating in Southeast Asia. The operation seized dozens of kilograms of narcotics.", // Deskripsi item
    image: "/assets/images/internasional.jpeg", // Gambar item
    link: "https://www.bing.com/ck/a?!&&p=d4bc4491b0d2737dJmltdHM9MTcyMzg1MjgwMCZpZ3VpZD0wZmIwYWFiZS1iMzIzLTY0NjctMjkzYi1iYjUyYjJlZjY1MjMmaW5zaWQ9NTE5Nw&ptn=3&ver=2&hsh=3&fclid=0fb0aabe-b323-6467-293b-bb52b2ef6523&psq=International+Drug+Network+Bust+in+Indonesia&u=a1aHR0cHM6Ly9lbi50ZW1wby5jby9yZWFkLzE4OTUzMjEvYm5uLWJ1c3RzLWludGVybmF0aW9uYWwtZHJ1Zy1mYWN0b3J5LWluLWJhbGlzLWdpYW55YXItcmFpZA&ntb=1", // Link ke artikel terkait
  },
  {
    title: "Increase in Drug Abuse Cases Among Indonesian Teenagers",
    description: "Recent reports show a significant rise in drug abuse among Indonesian teenagers, with new types of narcotics continuously emerging in the market.",
    image: "/assets/images/meningkat.jpg",
    link: "#",
  },
  {
    title: "Discovery of Marijuana Fields in Sumatra Forests",
    description: "The police discovered a marijuana field spanning several hectares hidden deep within the forests of Sumatra. This is one of the largest marijuana field discoveries in Indonesia.",
    image: "/assets/images/ganja.jpg",
    link: "#",
  },
  {
    title: "Anti-Drug Campaigns in Indonesian Schools",
    description: "The government launched a large-scale campaign in schools to raise awareness about the dangers of drugs. The program has received widespread support from the community.",
    image: "/assets/images/kampanye.jpg",
    link: "#",
  },
  {
    title: "Revelation of Drug Cases Involving Indonesian Celebrities",
    description: "Several Indonesian celebrities have been involved in drug scandals that have shocked the public. This case highlights the pressures and influences in the entertainment world.",
    image: "/assets/images/artis.jpg",
    link: "#",
  },
  {
    title: "Seizure of Narcotics Worth Billions at the Port",
    description: "Customs successfully thwarted the smuggling of narcotics worth billions of rupiah at one of Indonesia's main ports. This is one of the largest seizures of the year.",
    image: "/assets/images/laut.jpeg",
    link: "#",
  },
  {
    title: "Rehabilitation and Recovery Programs for Drug Users in Indonesia",
    description: "The government is strengthening rehabilitation programs for drug users by improving facilities and providing more comprehensive services throughout the country.",
    image: "/assets/images/rehab.jpg",
    link: "#",
  },
];
