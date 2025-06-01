const portraitData = {
import { useEffect, useState } from 'react';
import portraitData from '../data/portraits';

const PAGE_SIZE = 3;

export default function PortraitGallery() {
  const allPhotos = portraitData.subcategories[0].photos; //
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, allPhotos.length));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMore();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="gallery-grid">
      {allPhotos.slice(0, visibleCount).map((photo) => (
        <div key={photo.id} className="photo-card">
          <img src={photo.src} alt={photo.alt} />
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
}


      id: "urban-portraits",
      title: "Urban Portraits",
      description: "Modern portraits in city environments",
      coverImage: "https://images.pexels.com/photos/2794820/pexels-photo-2794820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photos: [
        {
          id: "up-1",
          src: "https://images.pexels.com/photos/2794820/pexels-photo-2794820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Woman in urban setting",
          description: "Downtown fashion portrait"
        },
        {
          id: "up-2",
          src: "https://images.pexels.com/photos/2531307/pexels-photo-2531307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Man against brick wall",
          description: "Industrial zone portrait"
        },
        {
          id: "up-3",
          src: "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Woman on city street",
          description: "Street style urban portrait"
        },
        {
          id: "up-4",
          src: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Man on rooftop",
          description: "City skyline rooftop portrait"
        },
        {
          id: "up-5",
          src: "https://images.pexels.com/photos/2691338/pexels-photo-2691338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Woman by neon lights",
          description: "Night city neon portrait"
        }
      ]
    },
    {
      id: "studio-portraits",
      title: "Studio-style Portraits",
      description: "Professional portraits with controlled lighting",
      coverImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photos: [
        {
          id: "sp-1",
          src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Professional headshot",
          description: "Corporate headshot with professional lighting"
        },
        {
          id: "sp-2",
          src: "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Black and white portrait",
          description: "Classic black and white studio portrait"
        },
        {
          id: "sp-3",
          src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Creative lighting portrait",
          description: "Creative studio lighting techniques"
        },
        {
          id: "sp-4",
          src: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Fashion studio portrait",
          description: "High-fashion studio session"
        },
        {
          id: "sp-5",
          src: "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Minimalist portrait",
          description: "Clean, minimalist studio portrait"
        }
      ]
    }
  ]
}

export default portraitData
