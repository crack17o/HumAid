import React from 'react';
import { PageTemplate } from '../components/templates';
import { Typography } from '../components/atoms';

const Services: React.FC = () => {
  return (
    <PageTemplate>
      <section style={{ padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <Typography variant="h1">Nos Services</Typography>
          <Typography variant="body">
            Découvrez l'étendue de nos services humanitaires.
          </Typography>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Services;
