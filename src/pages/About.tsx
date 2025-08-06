import React from 'react';
import { PageTemplate } from '../components/templates';
import { Typography, Button } from '../components/atoms';
import { Heart, Users, Target, Award, Globe, Shield } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <Typography variant="h1" className="about-hero__title">
              À propos de <span className="about-hero__highlight">HumAid</span>
            </Typography>
            <Typography variant="body" className="about-hero__description">
              Depuis plus de 10 ans, HumAid œuvre pour améliorer la vie des enfants en difficulté à travers le monde. 
              Notre mission est de créer un avenir meilleur pour chaque enfant, peu importe où il se trouve.
            </Typography>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission__content">
            <div className="mission__text">
              <Typography variant="h2" className="mission__title">
                Notre Mission
              </Typography>
              <Typography variant="body" className="mission__description">
                HumAid s'engage à fournir une aide humanitaire essentielle aux enfants les plus vulnérables. 
                Nous croyons que chaque enfant mérite d'avoir accès à l'éducation, aux soins de santé, 
                à la nutrition et à un environnement sûr pour grandir et s'épanouir.
              </Typography>
              <div className="mission__stats">
                <div className="mission__stat">
                  <Typography variant="h3" className="mission__stat-number">50,000+</Typography>
                  <Typography variant="body" className="mission__stat-label">Enfants aidés</Typography>
                </div>
                <div className="mission__stat">
                  <Typography variant="h3" className="mission__stat-number">15</Typography>
                  <Typography variant="body" className="mission__stat-label">Pays d'intervention</Typography>
                </div>
                <div className="mission__stat">
                  <Typography variant="h3" className="mission__stat-number">100+</Typography>
                  <Typography variant="body" className="mission__stat-label">Bénévoles actifs</Typography>
                </div>
              </div>
            </div>
            <div className="mission__image">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Enfants souriants"
                className="mission__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="values__header">
            <Typography variant="h2" className="values__title">
              Nos Valeurs
            </Typography>
            <Typography variant="body" className="values__description">
              Les principes qui guident notre action quotidienne
            </Typography>
          </div>
          <div className="values__grid">
            <div className="values__card">
              <div className="values__icon">
                <Heart size={40} />
              </div>
              <Typography variant="h3" className="values__card-title">Compassion</Typography>
              <Typography variant="body" className="values__card-description">
                Nous agissons avec empathie et bienveillance envers tous les enfants que nous aidons.
              </Typography>
            </div>
            <div className="values__card">
              <div className="values__icon">
                <Shield size={40} />
              </div>
              <Typography variant="h3" className="values__card-title">Intégrité</Typography>
              <Typography variant="body" className="values__card-description">
                Transparence et honnêteté dans toutes nos actions et dans la gestion des fonds.
              </Typography>
            </div>
            <div className="values__card">
              <div className="values__icon">
                <Users size={40} />
              </div>
              <Typography variant="h3" className="values__card-title">Solidarité</Typography>
              <Typography variant="body" className="values__card-description">
                Nous croyons en la force du collectif pour créer un impact positif durable.
              </Typography>
            </div>
            <div className="values__card">
              <div className="values__icon">
                <Target size={40} />
              </div>
              <Typography variant="h3" className="values__card-title">Efficacité</Typography>
              <Typography variant="body" className="values__card-description">
                Maximiser l'impact de chaque don grâce à une gestion rigoureuse des ressources.
              </Typography>
            </div>
            <div className="values__card">
              <div className="values__icon">
                <Globe size={40} />
              </div>
              <Typography variant="h3" className="values__card-title">Universalité</Typography>
              <Typography variant="body" className="values__card-description">
                Aide sans distinction de race, religion, nationalité ou appartenance politique.
              </Typography>
            </div>
            <div className="values__card">
              <div className="values__icon">
                <Award size={40} />
              </div>
              <Typography variant="h3" className="values__card-title">Excellence</Typography>
              <Typography variant="body" className="values__card-description">
                Recherche constante de l'amélioration de nos programmes et services.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history">
        <div className="container">
          <div className="history__content">
            <div className="history__text">
              <Typography variant="h2" className="history__title">
                Notre Histoire
              </Typography>
              <div className="history__timeline">
                <div className="history__item">
                  <div className="history__year">2014</div>
                  <div className="history__event">
                    <Typography variant="h4" className="history__event-title">Création de HumAid</Typography>
                    <Typography variant="body" className="history__event-description">
                      Fondation de l'organisation par un groupe de bénévoles passionnés.
                    </Typography>
                  </div>
                </div>
                <div className="history__item">
                  <div className="history__year">2016</div>
                  <div className="history__event">
                    <Typography variant="h4" className="history__event-title">Premier programme international</Typography>
                    <Typography variant="body" className="history__event-description">
                      Lancement de notre premier projet d'aide à l'éducation en Afrique subsaharienne.
                    </Typography>
                  </div>
                </div>
                <div className="history__item">
                  <div className="history__year">2019</div>
                  <div className="history__event">
                    <Typography variant="h4" className="history__event-title">Expansion des services</Typography>
                    <Typography variant="body" className="history__event-description">
                      Diversification vers les soins de santé et l'aide alimentaire.
                    </Typography>
                  </div>
                </div>
                <div className="history__item">
                  <div className="history__year">2024</div>
                  <div className="history__event">
                    <Typography variant="h4" className="history__event-title">10 ans d'impact</Typography>
                    <Typography variant="body" className="history__event-description">
                      Célébration de notre 10ème anniversaire avec plus de 50 000 enfants aidés.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="team__header">
            <Typography variant="h2" className="team__title">
              Notre Équipe
            </Typography>
            <Typography variant="body" className="team__description">
              Des professionnels dévoués à la cause des enfants
            </Typography>
          </div>
          <div className="team__grid">
            <div className="team__card">
              <div className="team__avatar">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Directeur"
                  className="team__img"
                />
              </div>
              <Typography variant="h4" className="team__name">Aron Waseka</Typography>
              <Typography variant="body" className="team__role">Directeur Général</Typography>
              <Typography variant="h5" className="team__bio">
                15 ans d'expérience dans l'humanitaire international
              </Typography>
            </div>
            <div className="team__card">
              <div className="team__avatar">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Coordinatrice"
                  className="team__img"
                />
              </div>
              <Typography variant="h4" className="team__name">Marianah Ngoy</Typography>
              <Typography variant="body" className="team__role">Coordinatrice Programmes</Typography>
              <Typography variant="h5" className="team__bio">
                Spécialiste en développement de programmes éducatifs
              </Typography>
            </div>
            <div className="team__card">
              <div className="team__avatar">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Responsable terrain"
                  className="team__img"
                />
              </div>
              <Typography variant="h4" className="team__name">Dan Beze</Typography>
              <Typography variant="body" className="team__role">Responsable Terrain</Typography>
              <Typography variant="h5" className="team__bio">
                Expert en logistique humanitaire et gestion de crise
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__content">
            <Typography variant="h2" className="about-cta__title">
              Rejoignez notre mission
            </Typography>
            <Typography variant="body" className="about-cta__description">
              Ensemble, nous pouvons faire la différence dans la vie des enfants qui en ont le plus besoin.
            </Typography>
            <div className="about-cta__actions">
              <Button variant="primary" size="lg">
                Faire un don
              </Button>
              <Button variant="secondary" size="lg">
                Devenir bénévole
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default About;
