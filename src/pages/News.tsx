import React from 'react';
import { PageTemplate } from '../components/templates';
import { Typography } from '../components/atoms';

const News: React.FC = () => {
  return (
    <PageTemplate>
      <section style={{ padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <Typography variant="h1">Actualités</Typography>
          <Typography variant="body">
            Restez informé de nos dernières actions et actualités.
          </Typography>
        </div>
      </section>
    </PageTemplate>
  );
};

export default News;
