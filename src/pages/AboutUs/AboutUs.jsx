import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';
import Style from './AboutUs.module.css';
import { Link, useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);
const navigate = useNavigate()
  // Brand images data
  const brands = [
    { id: 1, name: 'Nike', image: '/brands/nike.png' },
    { id: 2, name: 'Adidas', image: '/brands/adidas.png' },
    { id: 3, name: 'Puma', image: '/brands/puma.png' },
    { id: 4, name: 'Zara', image: '/brands/zara.png' },
    { id: 5, name: 'H&M', image: '/brands/hm.png' },
    { id: 6, name: 'Levi\'s', image: '/brands/levis.png' }
  ];

// Fashion-focused company stats data
// Company stats data with different images
const companyStats = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    title: 'Our Journey',
    stats: [
      { number: '10K+', label: 'Happy Customers' },
      { number: '50+', label: 'Brand Partners' },
      { number: '5+', label: 'Years Experience' }
    ]
  },
  {
    id: 2,
    image: '/about/quality.jpg',
    title: 'Our Quality',
    stats: [
      { number: '100%', label: 'Authentic Products' },
      { number: '24/7', label: 'Customer Support' },
      { number: '30-Day', label: 'Return Policy' }
    ]
  }
];
  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      rating: 5,
      comment: 'The quality of clothes is exceptional! Fast delivery and great customer service.',
      avatar: '/reviews/user1.jpg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Regular Customer',
      rating: 4,
      comment: 'Love the variety of brands. Always find something unique for my style.',
      avatar: '/reviews/user2.jpg'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Fashion Student',
      rating: 5,
      comment: 'Sustainable fashion options are amazing! Great initiative by Stackly.',
      avatar: '/reviews/user3.jpg'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Business Professional',
      rating: 5,
      comment: 'Perfect fit every time. The size guide is incredibly accurate.',
      avatar: '/reviews/user4.jpg'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      role: 'Fashion Enthusiast',
      rating: 4,
      comment: 'Affordable luxury at its best. Highly recommended for fashion lovers!',
      avatar: '/reviews/user5.jpg'
    },
    {
      id: 6,
      name: 'Alex Rodriguez',
      role: 'Influencer',
      rating: 5,
      comment: 'Best online shopping experience. The packaging and quality are premium.',
      avatar: '/reviews/user6.jpg'
    }
  ];

  // Company building images
  const buildingImages = [
    { id: 1, src: '/building/exterior.jpg', alt: 'Stackly Headquarters Exterior' },
    { id: 2, src: '/building/interior1.jpg', alt: 'Modern Office Space' },
    { id: 3, src: '/building/interior2.jpg', alt: 'Creative Workspace' },
    { id: 4, src: '/building/warehouse.jpg', alt: 'Advanced Warehouse Facility' }
  ];

  // Auto slide brands
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [brands.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? Style.starFilled : Style.star}>
        ★
      </span>
    ));
  };

  // Clothing manufacturing focused images
const buildingImages1 = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop', 
    alt: 'Fabric Selection & Quality Control' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1584450283041-7b5d0b9b7de1?w=600&h=400&fit=crop', 
    alt: 'Precision Cutting Department' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1589330694653-1-636395zA?w=600&h=400&fit=crop', 
    alt: 'Expert Tailoring Workshop' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&h=400&fit=crop', 
    alt: 'Final Product Inspection' 
  }
];

  return (
    <div
      className={Style.aboutContainer}
    >
      {/* Section 1: Hero About Section */}
      <section className={Style.heroSection}  style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
        <div className={Style.heroContent}>
          <div className={Style.heroText}>
            <h1>About Stackly</h1>
            <p className={Style.heroDescription}>
              Welcome to Stackly, your premier destination for contemporary fashion and lifestyle. 
              Founded in 2015, we've been revolutionizing the online shopping experience by bringing 
              together the best of style, quality, and affordability. Our curated collections are 
              designed to inspire confidence and help you express your unique personality through fashion.
            </p>
            <p className={Style.heroDescription}>
              At Stackly, we believe that everyone deserves to look and feel their best. That's why 
              we carefully select each item in our collection, ensuring it meets our high standards 
              for quality, comfort, and style. From casual everyday wear to sophisticated evening 
              outfits, we've got you covered for every occasion.
            </p>
            <button className={Style.ctaButton} onClick={()=>navigate("/Error")}><Link to={"/Error"}>Explore Our Collection</Link>
            </button>
          </div>
          <div className={Style.heroImage}>
            <img 
              src="/about/hero-about.jpg" 
              alt="Stackly Fashion Collection" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop';
              }}
            />
          </div>
        </div>
      </section>

     

      {/* Section 3: Company Stats with Hover Effect */}
      <section className={Style.statsSection} style={{
  background: theme === "light" ? "#ebebebff" : "#474747ff",
  color: theme === "light" ? "#474747ff" : "#ebebebff",
}}>
  <h2>Why Choose Stackly?</h2>
  <div className={Style.statsGrid}>
    {companyStats.map((item) => (
      <div key={item.id} className={Style.statCard}>
        <div className={Style.statImage}>
          <img 
            src={item.image} 
            alt={item.title}
            onError={(e) => {
              // Simple fallback if the direct URL fails
              e.target.src = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop';
            }}
          />
          <div className={Style.statOverlay}>
            <h3>{item.title}</h3>
            <div className={Style.statNumbers}>
              {item.stats.map((stat, index) => (
                <div key={index} className={Style.statItem}>
                  <span className={Style.statNumber}>{stat.number}</span>
                  <span className={Style.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Section 4: Customer Reviews Grid */}
      <section className={Style.reviewsSection}>
        <h2>What Our Customers Say</h2>
        <p className={Style.reviewsSubtitle}>Real feedback from real fashion lovers</p>
        
        <div className={Style.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={Style.reviewCard} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
              <div className={Style.reviewHeader}>
                <div className={Style.avatar}>
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    onError={(e) => {
                      e.target.src = `https://i.pravatar.cc/100?img=${review.id}`;
                    }}
                  />
                </div>
                <div className={Style.reviewerInfo}>
                  <h4 >{review.name}</h4>
                  <span>{review.role}</span>
                </div>
                <div className={Style.rating}>
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className={Style.reviewComment}>"{review.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Company Building Gallery */}
      <section className={Style.gallerySection} style={{
  background: theme === "light" ? "#ebebebff" : "#474747ff",
  color: theme === "light" ? "#474747ff" : "#ebebebff",
}}>
  <h2>Our Home</h2>
  <p className={Style.gallerySubtitle}>Where innovation meets fashion</p>
  
  <div className={Style.galleryGrid}>
    {buildingImages1.map((image, index) => (
      <div 
        key={image.id} 
        className={`${Style.galleryItem} ${Style[`galleryItem${index + 1}`]}`}
      >
        <img 
          src={image.src} 
          alt={image.alt}
          onError={(e) => {
            // Different Unsplash images for each position
            const fallbackImages = [
              'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop', // Modern office 1
              'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop', // Modern office 2
              'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', // Creative workspace
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop' // Warehouse
            ];
            e.target.src = fallbackImages[index] || fallbackImages[0];
          }}
        />
        <div className={Style.galleryOverlay}>
          <span>{image.alt}</span>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default AboutUs;