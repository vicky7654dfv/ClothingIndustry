import React, { useContext, useState } from "react";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import Style from "./Services.module.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();
  // Main services data
  const mainServices = [
    {
      id: 1,
      icon: "🎯",
      title: "Personal Styling",
      description:
        "Get personalized fashion recommendations from our expert stylists based on your body type, preferences, and occasion.",
      features: [
        "Free Style Consultation",
        "Body Type Analysis",
        "Occasion-based Styling",
        "Seasonal Updates",
      ],
    },
    {
      id: 2,
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Enjoy quick and reliable delivery services with multiple shipping options to suit your needs.",
      features: [
        "Same Day Delivery",
        "Express Shipping",
        "Free Shipping Over $99",
        "Real-time Tracking",
      ],
    },
    {
      id: 3,
      icon: "↩️",
      title: "Easy Returns",
      description:
        "Hassle-free return policy with quick refunds and exchanges to ensure complete customer satisfaction.",
      features: [
        "30-Day Return Window",
        "Free Return Shipping",
        "Instant Refunds",
        "Size Exchange",
      ],
    },
  ];

  // Premium services data
  const premiumServices = [
    {
      id: 1,
      title: "VIP Personal Shopper",
      price: "$99/month",
      description:
        "Dedicated personal shopper service with exclusive access to new collections.",
      benefits: [
        "Priority Access",
        "Personal Shopper",
        "Early Releases",
        "Private Fitting Room",
      ],
    },
    {
      id: 2,
      title: "Wardrobe Revamp",
      price: "$199/session",
      description:
        "Complete wardrobe makeover with professional stylists and personalized recommendations.",
      benefits: [
        "Style Assessment",
        "Closet Audit",
        "Shopping List",
        "Seasonal Planning",
      ],
    },
  ];

  // Process steps
  const processSteps = [
    {
      step: 1,
      title: "Browse & Select",
      description:
        "Explore our curated collections and select your favorite items",
      icon: "👕",
    },
    {
      step: 2,
      title: "Get Styled",
      description: "Use our virtual try-on or consult with our stylists",
      icon: "👗",
    },
    {
      step: 3,
      title: "Fast Delivery",
      description: "Receive your order with our premium packaging",
      icon: "📦",
    },
    {
      step: 4,
      title: "Style Confidently",
      description: "Wear with confidence and share your style journey",
      icon: "⭐",
    },
  ];

  // Customer testimonials
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      service: "Personal Styling",
      comment:
        "The personal styling service completely transformed my wardrobe! I feel more confident than ever.",
      rating: 5,
      avatar: "/testimonials/user1.jpg",
    },
    {
      id: 2,
      name: "James Wilson",
      service: "VIP Membership",
      comment:
        "As a VIP member, I get first access to all new collections. Absolutely worth it!",
      rating: 5,
      avatar: "/testimonials/user2.jpg",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      service: "Wardrobe Revamp",
      comment:
        "The wardrobe revamp service helped me declutter and build a capsule wardrobe I love.",
      rating: 4,
      avatar: "/testimonials/user3.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      service: "Fast Delivery",
      comment:
        "Same-day delivery saved me for an important event. Excellent service!",
      rating: 5,
      avatar: "/testimonials/user4.jpg",
    },
  ];

  // FAQ section
  const serviceFAQs = [
    {
      question: "How does personal styling work?",
      answer:
        "Our personal styling begins with a detailed style quiz. Based on your preferences, our stylists curate 5-7 outfits specifically for you. You can try them at home and keep what you love.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all items in original condition. Return shipping is free for all customers. Refunds are processed within 24 hours of receiving the returned items.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. International customers are responsible for any customs duties or taxes.",
    },
    {
      question: "Can I modify my order after placement?",
      answer:
        "Orders can be modified within 1 hour of placement. Please contact our customer service team immediately for any changes. After 1 hour, orders enter our processing system and cannot be modified.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? Style.starFilled : Style.star}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className={Style.servicesContainer}
      style={{
        background: theme === "light" ? "#ffffff" : "#1a1a1a",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      {/* Section 1: Hero Services Section */}
      <section className={Style.heroSection}>
        <div className={Style.heroContent}>
          <div className={Style.heroText}>
            <h1>Premium Services for Fashion Lovers</h1>
            <p className={Style.heroDescription}>
              At Stackly, we go beyond just selling clothes. We offer
              comprehensive fashion services designed to enhance your style
              journey. From personalized styling to hassle-free returns, we're
              committed to making your fashion experience exceptional.
            </p>
            <p className={Style.heroDescription}>
              Our team of expert stylists and fashion consultants are here to
              help you discover your unique style, build a versatile wardrobe,
              and shop with confidence.
            </p>
            <button
              onClick={() => {
                navigate("/Error");
              }}
              className={Style.ctaButton}
            >
              Book a Style Consultation
            </button>
          </div>
          <div className={Style.heroImage}>
            <img
              src="/services/hero-services.jpg"
              alt="Fashion Styling Services"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop";
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Main Services Showcase */}
      <section className={Style.servicesShowcase}>
        <div className={Style.servicesContent}>
          <h2>Our Core Services</h2>
          <p className={Style.servicesSubtitle}>
            Designed to make your fashion journey seamless and enjoyable
          </p>

          <div className={Style.servicesGrid}>
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`${Style.serviceCard} ${
                  activeService === index ? Style.activeService : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={Style.serviceIcon}>
                  <span>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p
                  style={{
                    background: theme === "light" ? "#ffffff" : "#ffffff",
                    color: theme === "light" ? "#333" : "#333",
                  }}
                >
                  {service.description}
                </p>
                <ul
                  style={{
                    background: theme === "light" ? "#ffffff" : "#ffffff",
                    color: theme === "light" ? "#333" : "#333",
                  }}
                  className={Style.featuresList}
                >
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    navigate("/Error");
                  }}
                  className={Style.learnMoreBtn}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Premium Services */}
      <section className={Style.premiumSection}>
        <div className={Style.premiumContent}>
          <h2>Exclusive Premium Services</h2>
          <p className={Style.premiumSubtitle}>
            Elevate your style experience with our premium offerings
          </p>

          <div className={Style.premiumGrid}>
            {premiumServices.map((service) => (
              <div key={service.id} className={Style.premiumCard}>
                <div className={Style.premiumHeader}>
                  <h3>{service.title}</h3>
                  <span className={Style.price}>{service.price}</span>
                </div>
                <p className={Style.premiumDescription}>
                  {service.description}
                </p>
                <ul className={Style.benefitsList}>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className={Style.checkmark}>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    navigate("/Error");
                  }}
                  className={Style.premiumCta}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className={Style.processSection}>
        <div className={Style.processContent}>
          <h2
            style={{
              background: theme === "light" ? "#ffffff" : "#ffffff",
              color: theme === "light" ? "#333" : "#333",
            }}
          >
            How Our Services Work
          </h2>
          <p
            style={{
              background: theme === "light" ? "#ffffff" : "#ffffff",
              color: theme === "light" ? "#333" : "#333",
            }}
            className={Style.processSubtitle}
          >
            Simple steps to transform your style experience
          </p>

          <div className={Style.processSteps}>
            {processSteps.map((step) => (
              <div key={step.step} className={Style.processStep}>
                <div className={Style.stepNumber}>
                  <span>{step.step}</span>
                </div>
                <div className={Style.stepIcon}>{step.icon}</div>
                <h4>{step.title}</h4>
                <p
                  style={{
                    background: theme === "light" ? "#ffffff" : "#ffffff",
                    color: theme === "light" ? "#333" : "#333",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials & FAQ Grid */}
      <section className={Style.testimonialsSection}>
        <div className={Style.testimonialsContent}>
          <div className={Style.testimonialsGrid}>
            {/* Testimonials Side */}
            <div className={Style.testimonials}>
              <h2>What Clients Say</h2>
              <div className={Style.testimonialsList}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className={Style.testimonialCard}>
                    <div className={Style.testimonialHeader}>
                      <div className={Style.testimonialAvatar}>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          onError={(e) => {
                            e.target.src = `https://i.pravatar.cc/100?img=${testimonial.id}`;
                          }}
                        />
                      </div>
                      <div className={Style.testimonialInfo}>
                        <h4
                          style={{
                            background:
                              theme === "light" ? "#ffffff" : "#ffffff",
                            color: theme === "light" ? "#333" : "#333",
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <span
                          style={{
                            background:
                              theme === "light" ? "#ffffff" : "#ffffff",
                            color: theme === "light" ? "#333" : "#333",
                          }}
                        >
                          {testimonial.service}
                        </span>
                      </div>
                      <div className={Style.testimonialRating}>
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p
                      style={{
                        background: theme === "light" ? "#ffffff" : "#ffffff",
                        color: theme === "light" ? "#333" : "#333",
                      }}
                      className={Style.testimonialComment}
                    >
                      "{testimonial.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Side */}
            <div className={Style.faqSide}>
              <h2>Service FAQs</h2>
              <div className={Style.faqList}>
                {serviceFAQs.map((faq, index) => (
                  <div key={index} className={Style.faqItem}>
                    <h4>{faq.question}</h4>
                    <p
                      style={{
                        background: theme === "light" ? "#ffffff" : "#ffffff",
                        color: theme === "light" ? "#333" : "#333",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className={Style.contactInfo}>
                <h4>Need More Help?</h4>
                <p
                  style={{
                    background: theme === "light" ? "#ffffff" : "#ffffff",
                    color: theme === "light" ? "#333" : "#333",
                  }}
                >
                  Our customer service team is available 24/7 to assist you with
                  any questions.
                </p>
                <button
                  onClick={() => {
                    navigate("/Contact");
                  }}
                  className={Style.contactButton}
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
