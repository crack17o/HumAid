import React, { useState } from 'react';
import { PageTemplate } from '../components/templates';
import { Typography, Button } from '../components/atoms';
import { Heart, BookOpen, Utensils, Home, Stethoscope, GraduationCap, CreditCard, Target } from 'lucide-react';
import './Causes.css';

const Causes: React.FC = () => {
  const [selectedCause, setSelectedCause] = useState<number | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [donationSuccess, setDonationSuccess] = useState<boolean>(false);
  const [donationComplete, setDonationComplete] = useState<{ causeTitle: string; amount: string } | null>(null);

  const causes = [
    {
      id: 1,
      title: "Éducation pour tous",
      description: "Offrir une éducation de qualité aux enfants défavorisés",
      longDescription: "Ce programme vise à construire des écoles, former des enseignants et fournir du matériel scolaire dans les communautés rurales. Votre don permet de scolariser un enfant pendant une année complète.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      raised: 45000,
      goal: 100000,
      supporters: 234,
      impact: "1 enfant scolarisé = 50€/mois"
    },
    {
      id: 2,
      title: "Nutrition et santé",
      description: "Lutter contre la malnutrition infantile",
      longDescription: "Programme de distribution de repas nutritifs et de soins médicaux préventifs pour les enfants en situation de malnutrition. Includes des centres de nutrition et des campagnes de vaccination.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      raised: 32000,
      goal: 75000,
      supporters: 178,
      impact: "1 repas nutritif = 2€"
    },
    {
      id: 3,
      title: "Logement d'urgence",
      description: "Héberger les familles en détresse",
      longDescription: "Construction et rénovation de centres d'accueil pour les familles déplacées et les orphelins. Ce programme offre un toit sûr et temporaire en attendant une solution durable.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      raised: 28000,
      goal: 60000,
      supporters: 145,
      impact: "1 famille hébergée = 200€/mois"
    },
    {
      id: 4,
      title: "Soins médicaux",
      description: "Accès aux soins de santé essentiels",
      longDescription: "Financement de cliniques mobiles, médicaments et interventions chirurgicales pour les enfants sans accès aux soins de santé. Focus sur les maladies curables et la prévention.",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      raised: 38000,
      goal: 80000,
      supporters: 201,
      impact: "1 consultation = 15€"
    },
    {
      id: 5,
      title: "Formation professionnelle",
      description: "Donner des compétences aux jeunes",
      longDescription: "Programmes de formation professionnelle pour les adolescents et jeunes adultes afin qu'ils puissent subvenir à leurs besoins et soutenir leur famille. Métiers artisanaux, informatique, agriculture.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      raised: 22000,
      goal: 50000,
      supporters: 89,
      impact: "1 formation = 300€"
    },
    {
      id: 6,
      title: "Aide d'urgence",
      description: "Réponse rapide aux catastrophes",
      longDescription: "Fonds d'urgence pour répondre rapidement aux catastrophes naturelles et crises humanitaires. Distribution de kits de survie, eau potable, abris temporaires et premiers secours.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      raised: 55000,
      goal: 120000,
      supporters: 312,
      impact: "1 kit d'urgence = 25€"
    }
  ];

  const predefinedAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonation = async (causeId: number) => {
    const cause = causes.find(c => c.id === causeId);
    if (!cause || !donationAmount || Number(donationAmount) < 1) return;

    setIsProcessing(true);
    
    try {
      // Simulation du traitement du paiement (2 secondes)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Succès du paiement
      setDonationSuccess(true);
      setDonationComplete({
        causeTitle: cause.title,
        amount: donationAmount
      });
      
      // Fermer la modal de donation après un délai
      setTimeout(() => {
        setSelectedCause(null);
        setDonationAmount('');
        setIsProcessing(false);
        setDonationSuccess(false);
      }, 3000);
      
    } catch (error) {
      // Gestion d'erreur (optionnel)
      setIsProcessing(false);
      alert('Erreur lors du traitement du paiement. Veuillez réessayer.');
    }
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="causes-hero">
        <div className="container">
          <div className="causes-hero__content">
            <Typography variant="h1" className="causes-hero__title">
              Nos <span className="causes-hero__highlight">Causes</span>
            </Typography>
            <Typography variant="body" className="causes-hero__description">
              Chaque don compte. Choisissez la cause qui vous tient à cœur et participez 
              à transformer la vie des enfants les plus vulnérables.
            </Typography>
            <div className="causes-hero__stats">
              <div className="causes-hero__stat">
                <Typography variant="h3" className="causes-hero__stat-number">6</Typography>
                <Typography variant="body" className="causes-hero__stat-label">Causes actives</Typography>
              </div>
              <div className="causes-hero__stat">
                <Typography variant="h3" className="causes-hero__stat-number">1,159</Typography>
                <Typography variant="body" className="causes-hero__stat-label">Donateurs</Typography>
              </div>
              <div className="causes-hero__stat">
                <Typography variant="h3" className="causes-hero__stat-number">220,000€</Typography>
                <Typography variant="body" className="causes-hero__stat-label">Collectés</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="causes-grid">
        <div className="container">
          <div className="causes-grid__header">
            <Typography variant="h2" className="causes-grid__title">
              Choisissez votre cause
            </Typography>
            <Typography variant="body" className="causes-grid__description">
              Découvrez nos programmes d'aide et soutenez celui qui vous inspire le plus
            </Typography>
          </div>
          <div className="causes-grid__items">
            {causes.map((cause) => (
              <div key={cause.id} className="cause-card">
                <div className="cause-card__image">
                  <img src={cause.image} alt={cause.title} className="cause-card__img" />
                  <div className="cause-card__icon">
                    <cause.icon size={32} />
                  </div>
                </div>
                <div className="cause-card__content">
                  <Typography variant="h3" className="cause-card__title">
                    {cause.title}
                  </Typography>
                  <Typography variant="body" className="cause-card__description">
                    {cause.description}
                  </Typography>
                  <Typography variant="h5" className="cause-card__long-description">
                    {cause.longDescription}
                  </Typography>
                  
                  <div className="cause-card__progress">
                    <div className="cause-card__progress-header">
                      <span className="cause-card__raised">{cause.raised.toLocaleString()}€ collectés</span>
                      <span className="cause-card__goal">Objectif: {cause.goal.toLocaleString()}€</span>
                    </div>
                    <div className="cause-card__progress-bar">
                      <div 
                        className="cause-card__progress-fill"
                        style={{ width: `${getProgressPercentage(cause.raised, cause.goal)}%` }}
                      ></div>
                    </div>
                    <div className="cause-card__stats">
                      <span className="cause-card__supporters">{cause.supporters} donateurs</span>
                      <span className="cause-card__impact">{cause.impact}</span>
                    </div>
                  </div>

                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="cause-card__donate-btn"
                    onClick={() => setSelectedCause(cause.id)}
                  >
                    <CreditCard size={20} />
                    Faire un don
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Modal/Section */}
      {selectedCause && (
        <section className="donation-modal">
          <div className="donation-modal__overlay" onClick={() => setSelectedCause(null)}>
            <div className="donation-modal__content" onClick={(e) => e.stopPropagation()}>
              <div className="donation-modal__header">
                <Typography variant="h3" className="donation-modal__title">
                  Faire un don pour: {causes.find(c => c.id === selectedCause)?.title}
                </Typography>
                <button 
                  className="donation-modal__close"
                  onClick={() => setSelectedCause(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="donation-modal__body">
                {donationSuccess ? (
                  // Affichage de succès
                  <div className="donation-success">
                    <div className="donation-success__icon">✅</div>
                    <Typography variant="h3" className="donation-success__title">
                      Merci pour votre don !
                    </Typography>
                    <Typography variant="body" className="donation-success__message">
                      Votre don de <strong>{donationAmount}€</strong> pour <strong>{donationComplete?.causeTitle}</strong> a été traité avec succès.
                    </Typography>
                    <Typography variant="h5" className="donation-success__info">
                      Vous recevrez un reçu fiscal par email dans quelques minutes.
                    </Typography>
                    <div className="donation-success__spinner">
                      <div className="spinner"></div>
                      <Typography variant="h5">Fermeture automatique...</Typography>
                    </div>
                  </div>
                ) : (
                  // Formulaire de donation normal
                  <>
                    <Typography variant="body" className="donation-modal__description">
                      Choisissez le montant de votre don. Paiement sécurisé par carte bancaire.
                    </Typography>
                    
                    <div className="donation-amounts">
                      <Typography variant="h4" className="donation-amounts__title">
                        Montant suggéré
                      </Typography>
                      <div className="donation-amounts__grid">
                        {predefinedAmounts.map((amount) => (
                          <button
                            key={amount}
                            className={`donation-amount ${donationAmount === amount.toString() ? 'donation-amount--active' : ''}`}
                            onClick={() => setDonationAmount(amount.toString())}
                            disabled={isProcessing}
                          >
                            {amount}€
                          </button>
                        ))}
                      </div>
                      
                      <div className="donation-custom">
                        <label className="donation-custom__label">
                          <Typography variant="body">Autre montant:</Typography>
                          <input
                            type="number"
                            className="donation-custom__input"
                            placeholder="Montant en €"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            min="1"
                            disabled={isProcessing}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="donation-impact">
                      <Typography variant="h4" className="donation-impact__title">
                        <Target size={20} />
                        Impact de votre don
                      </Typography>
                      <Typography variant="body" className="donation-impact__text">
                        {donationAmount && causes.find(c => c.id === selectedCause)?.impact}
                        {donationAmount && ` × ${Math.floor(Number(donationAmount) / Number(causes.find(c => c.id === selectedCause)?.impact.match(/\d+/)?.[0] || 1))} = ${donationAmount}€`}
                      </Typography>
                    </div>

                    <div className="donation-actions">
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="donation-submit"
                        onClick={() => handleDonation(selectedCause)}
                        disabled={!donationAmount || Number(donationAmount) < 1 || isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="spinner-small"></div>
                            Traitement...
                          </>
                        ) : (
                          <>
                            <CreditCard size={20} />
                            Payer par carte bancaire
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="lg"
                        onClick={() => setSelectedCause(null)}
                        disabled={isProcessing}
                      >
                        Annuler
                      </Button>
                    </div>

                    <div className="donation-security">
                      <Typography variant="h5" className="donation-security__text">
                        🔒 Paiement 100% sécurisé • SSL • Stripe
                      </Typography>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How it Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works__header">
            <Typography variant="h2" className="how-it-works__title">
              Comment ça fonctionne
            </Typography>
            <Typography variant="body" className="how-it-works__description">
              Votre don en 3 étapes simples
            </Typography>
          </div>
          <div className="how-it-works__steps">
            <div className="how-step">
              <div className="how-step__number">1</div>
              <Typography variant="h4" className="how-step__title">Choisissez</Typography>
              <Typography variant="body" className="how-step__description">
                Sélectionnez la cause qui vous tient à cœur
              </Typography>
            </div>
            <div className="how-step">
              <div className="how-step__number">2</div>
              <Typography variant="h4" className="how-step__title">Donnez</Typography>
              <Typography variant="body" className="how-step__description">
                Définissez le montant et payez en toute sécurité
              </Typography>
            </div>
            <div className="how-step">
              <div className="how-step__number">3</div>
              <Typography variant="h4" className="how-step__title">Impactez</Typography>
              <Typography variant="body" className="how-step__description">
                Recevez des nouvelles de l'impact de votre don
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="causes-cta">
        <div className="container">
          <div className="causes-cta__content">
            <Typography variant="h2" className="causes-cta__title">
              Chaque don compte
            </Typography>
            <Typography variant="body" className="causes-cta__description">
              Rejoignez notre communauté de donateurs et aidez-nous à changer la vie des enfants.
            </Typography>
            <div className="causes-cta__actions">
              <Button variant="primary" size="lg">
                Voir toutes les causes
              </Button>
              <Button variant="secondary" size="lg">
                Devenir partenaire
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Causes;
