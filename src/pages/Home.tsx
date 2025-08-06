import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Globe, Shield, ChevronLeft, ChevronRight, Calendar, Award } from 'lucide-react';
import { PageTemplate } from '../components/templates';
import { Typography, Button } from '../components/atoms';
import './Home.css';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Distribution de nourriture",
    caption: "Aide alimentaire"
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Soins médicaux",
    caption: "Soins médicaux"
  },
  {
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Éducation des enfants",
    caption: "Programmes éducatifs"
  }
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <PageTemplate className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container container">
          <div className="hero__content">
            <Typography variant="h1" className="hero__title">
              Ensemble, construisons un <span className="hero__highlight">avenir meilleur</span> pour les enfants
            </Typography>
            <Typography variant="body" className="hero__description">
              HumAid s'engage à transformer la vie des enfants dans le besoin à travers des actions concrètes, 
              durables et transparentes. Rejoignez notre mission humanitaire.
            </Typography>
            <div className="hero__actions">
              <Button variant="primary" size="lg">
                Faire un don maintenant
                <ArrowRight size={20} />
              </Button>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Découvrir notre mission
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Enfants souriants"
              className="hero__img"
            />
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="impact">
        <div className="impact__container container">
          <div className="impact__stats">
            <div className="impact__stat">
              <Typography variant="h2" className="impact__number">10,000+</Typography>
              <Typography variant="body" className="impact__label">Enfants aidés</Typography>
            </div>
            <div className="impact__stat">
              <Typography variant="h2" className="impact__number">50+</Typography>
              <Typography variant="body" className="impact__label">Projets réalisés</Typography>
            </div>
            <div className="impact__stat">
              <Typography variant="h2" className="impact__number">25</Typography>
              <Typography variant="body" className="impact__label">Pays d'intervention</Typography>
            </div>
            <div className="impact__stat">
              <Typography variant="h2" className="impact__number">500+</Typography>
              <Typography variant="body" className="impact__label">Bénévoles actifs</Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services__container container">
          <div className="services__header">
            <Typography variant="h2" className="services__title" align="center">
              Nos domaines d'action
            </Typography>
            <Typography variant="body" className="services__description" align="center">
              Nous agissons sur plusieurs fronts pour garantir un impact durable
            </Typography>
          </div>
          <div className="services__grid">
            <div className="services__card">
              <div className="services__icon">
                <Heart size={48} />
              </div>
              <Typography variant="h4" className="services__card-title">
                Santé & Nutrition
              </Typography>
              <Typography variant="body" className="services__card-description">
                Accès aux soins médicaux et programmes nutritionnels pour les enfants les plus vulnérables.
              </Typography>
            </div>
            <div className="services__card">
              <div className="services__icon">
                <Users size={48} />
              </div>
              <Typography variant="h4" className="services__card-title">
                Éducation
              </Typography>
              <Typography variant="body" className="services__card-description">
                Construction d'écoles et programmes éducatifs pour offrir un avenir meilleur.
              </Typography>
            </div>
            <div className="services__card">
              <div className="services__icon">
                <Globe size={48} />
              </div>
              <Typography variant="h4" className="services__card-title">
                Aide d'urgence
              </Typography>
              <Typography variant="body" className="services__card-description">
                Intervention rapide lors de crises humanitaires et catastrophes naturelles.
              </Typography>
            </div>
            <div className="services__card">
              <div className="services__icon">
                <Shield size={48} />
              </div>
              <Typography variant="h4" className="services__card-title">
                Protection
              </Typography>
              <Typography variant="body" className="services__card-description">
                Protection des droits de l'enfant et lutte contre toutes formes de violence.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services">
        <div className="our-services__container container">
          <div className="our-services__header">
            <Typography variant="h2" className="our-services__title" align="center">
              Nos Services
            </Typography>
            <Typography variant="body" className="our-services__description" align="center">
              Des services complets pour maximiser notre impact humanitaire
            </Typography>
          </div>
          <div className="our-services__grid">
            <div className="our-services__card">
              <div className="our-services__icon">
                <Award size={48} />
              </div>
              <Typography variant="h4" className="our-services__card-title">
                Conseil & Expertise
              </Typography>
              <Typography variant="body" className="our-services__card-description">
                Accompagnement des communautés locales et formation des équipes sur le terrain.
              </Typography>
            </div>
            <div className="our-services__card">
              <div className="our-services__icon">
                <Users size={48} />
              </div>
              <Typography variant="h4" className="our-services__card-title">
                Mobilisation
              </Typography>
              <Typography variant="body" className="our-services__card-description">
                Organisation d'événements et campagnes de sensibilisation pour mobiliser les donateurs.
              </Typography>
            </div>
            <div className="our-services__card">
              <div className="our-services__icon">
                <Globe size={48} />
              </div>
              <Typography variant="h4" className="our-services__card-title">
                Logistique
              </Typography>
              <Typography variant="body" className="our-services__card-description">
                Coordination et distribution efficace de l'aide humanitaire dans le monde entier.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="gallery">
        <div className="gallery__container container">
          <div className="gallery__header">
            <Typography variant="h2" className="gallery__title" align="center">
              Galerie
            </Typography>
            <Typography variant="body" className="gallery__description" align="center">
              Découvrez nos actions sur le terrain en images
            </Typography>
          </div>
          
          <div className="gallery__carousel">
            <div 
              className="gallery__carousel-container"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery__carousel-item">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="gallery__carousel-image"
                  />
                  <div className="gallery__carousel-overlay">
                    <Typography variant="h3" className="gallery__carousel-caption">
                      {image.caption}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery__controls">
            <button 
              className="gallery__control-btn"
              onClick={goToPrevious}
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="gallery__control-btn"
              onClick={goToNext}
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="gallery__indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery__indicator ${
                  index === currentImageIndex ? 'gallery__indicator--active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <div className="news__container container">
          <div className="news__header">
            <Typography variant="h2" className="news__title" align="center">
              Actualités
            </Typography>
            <Typography variant="body" className="news__description" align="center">
              Restez informés de nos dernières actions et réalisations
            </Typography>
          </div>
          <div className="news__grid">
            <article className="news__card">
              <div className="news__date">
                <Calendar size={16} />
                <span>15 Juillet 2025</span>
              </div>
              <Typography variant="h4" className="news__card-title">
                Ouverture de 3 nouvelles écoles au Mali
              </Typography>
              <Typography variant="body" className="news__card-excerpt">
                Grâce à vos dons, nous avons pu inaugurer trois établissements scolaires qui accueilleront plus de 500 enfants...
              </Typography>
              <Button variant="outline" size="sm">
                Lire la suite
              </Button>
            </article>
            <article className="news__card">
              <div className="news__date">
                <Calendar size={16} />
                <span>8 Juillet 2025</span>
              </div>
              <Typography variant="h4" className="news__card-title">
                Mission d'urgence en Haïti
              </Typography>
              <Typography variant="body" className="news__card-excerpt">
                Nos équipes se mobilisent suite aux récentes catastrophes naturelles pour apporter une aide d'urgence...
              </Typography>
              <Button variant="outline" size="sm">
                Lire la suite
              </Button>
            </article>
            <article className="news__card">
              <div className="news__date">
                <Calendar size={16} />
                <span>1 Juillet 2025</span>
              </div>
              <Typography variant="h4" className="news__card-title">
                Campagne de vaccination réussie
              </Typography>
              <Typography variant="body" className="news__card-excerpt">
                Plus de 10 000 enfants ont pu bénéficier de notre programme de vaccination dans 5 pays d'Afrique...
              </Typography>
              <Button variant="outline" size="sm">
                Lire la suite
              </Button>
            </article>
          </div>
          <div className="news__cta">
            <Button variant="secondary" size="md">
              Toutes les actualités
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta__container container">
          <div className="cta__content">
            <Typography variant="h2" className="cta__title" align="center">
              Votre don peut changer une vie
            </Typography>
            <Typography variant="body" className="cta__description" align="center">
              Chaque contribution, aussi petite soit-elle, a un impact réel sur la vie d'un enfant. 
              Rejoignez notre communauté de donateurs engagés.
            </Typography>
            <div className="cta__actions">
              <Link to="/causes">
                <Button variant="primary" size="lg">
                  Voir nos causes
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Home;
