import React, { useState } from 'react';
import { PageTemplate } from '../components/templates';
import { Typography, Input, Button } from '../components/atoms';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation de l'envoi du message (2 secondes)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Succès de l'envoi
      setIsSubmitted(true);
      
      // Réinitialiser le formulaire après 4 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
        setIsSubmitted(false);
      }, 4000);
      
    } catch (error) {
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <Typography variant="h1" className="contact-hero__title">
              Contactez <span className="contact-hero__highlight">HumAid</span>
            </Typography>
            <Typography variant="body" className="contact-hero__description">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et discuter de vos projets de collaboration.
            </Typography>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <Typography variant="h2" className="contact-info__title">
                Restons en contact
              </Typography>
              <Typography variant="body" className="contact-info__description">
                Plusieurs moyens pour nous joindre selon vos préférences.
              </Typography>
              
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-info__content">
                    <Typography variant="h4" className="contact-info__label">Email</Typography>
                    <Typography variant="body" className="contact-info__value">contact@humaid.org</Typography>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-info__content">
                    <Typography variant="h4" className="contact-info__label">Téléphone</Typography>
                    <Typography variant="body" className="contact-info__value">+33 1 23 45 67 89</Typography>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-info__content">
                    <Typography variant="h4" className="contact-info__label">Adresse</Typography>
                    <Typography variant="body" className="contact-info__value">
                      123 Rue de la Solidarité<br />
                      75001 Paris, France
                    </Typography>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-info__content">
                    <Typography variant="h4" className="contact-info__label">Horaires</Typography>
                    <Typography variant="body" className="contact-info__value">
                      Lun - Ven: 9h00 - 18h00<br />
                      Sam: 9h00 - 12h00
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              {isSubmitted ? (
                // Message de succès
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <CheckCircle size={64} />
                  </div>
                  <Typography variant="h3" className="contact-success__title">
                    Message envoyé !
                  </Typography>
                  <Typography variant="body" className="contact-success__message">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </Typography>
                  <div className="contact-success__spinner">
                    <div className="spinner"></div>
                    <Typography variant="h5">Réinitialisation du formulaire...</Typography>
                  </div>
                </div>
              ) : (
                // Formulaire de contact
                <>
                  <Typography variant="h2" className="contact-form__title">
                    Envoyez-nous un message
                  </Typography>
                  <Typography variant="body" className="contact-form__description">
                    Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                  </Typography>
                  
                  <form onSubmit={handleSubmit} className="contact-form__form">
                    <div className="form-row">
                      <div className="form-field">
                        <Input
                          label="Nom complet"
                          type="text"
                          name="name"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="form-field">
                        <Input
                          label="Email"
                          type="email"
                          name="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div className="form-field">
                      <Input
                        label="Sujet"
                        type="text"
                        name="subject"
                        placeholder="Sujet de votre message"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="form-field">
                      <label className="form-field__label">
                        <Typography variant="body">Message</Typography>
                        <textarea
                          name="message"
                          className="form-field__textarea"
                          placeholder="Décrivez votre demande en détail..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </label>
                    </div>
                    
                    <div className="form-actions">
                      <Button 
                        variant="primary" 
                        size="lg" 
                        type="submit"
                        className="contact-submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="spinner-small"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq__header">
            <Typography variant="h2" className="contact-faq__title">
              Questions fréquentes
            </Typography>
            <Typography variant="body" className="contact-faq__description">
              Les réponses aux questions les plus courantes
            </Typography>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <Typography variant="h4" className="faq-question">
                Comment puis-je faire un don ?
              </Typography>
              <Typography variant="body" className="faq-answer">
                Rendez-vous sur notre page "Nos Causes" et choisissez la cause qui vous tient à cœur. 
                Vous pouvez faire un don sécurisé par carte bancaire en quelques clics.
              </Typography>
            </div>
            
            <div className="faq-item">
              <Typography variant="h4" className="faq-question">
                Puis-je devenir bénévole ?
              </Typography>
              <Typography variant="body" className="faq-answer">
                Absolument ! Nous accueillons toujours de nouveaux bénévoles. 
                Contactez-nous via ce formulaire en précisant vos disponibilités et compétences.
              </Typography>
            </div>
            
            <div className="faq-item">
              <Typography variant="h4" className="faq-question">
                Mes dons sont-ils déductibles d'impôts ?
              </Typography>
              <Typography variant="body" className="faq-answer">
                Oui, HumAid est reconnue d'utilité publique. Vous recevrez un reçu fiscal 
                vous permettant de déduire 75% de votre don de vos impôts.
              </Typography>
            </div>
            
            <div className="faq-item">
              <Typography variant="h4" className="faq-question">
                Comment suivre l'impact de mon don ?
              </Typography>
              <Typography variant="body" className="faq-answer">
                Nous envoyons régulièrement des rapports d'impact à nos donateurs. 
                Vous recevrez également notre newsletter trimestrielle avec les dernières nouvelles.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Contact;
