import React from 'react';
import { PageTemplate } from '../components/templates';
import { Typography } from '../components/atoms';

const Gallery: React.FC = () => {
  return (
    <PageTemplate>
      <section style={{ padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <Typography variant="h1">Galerie Photos</Typography>
          <Typography variant="body">
            Découvrez en images l'impact de nos actions sur le terrain.
          </Typography>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Gallery;
