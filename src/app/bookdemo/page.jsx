import React from 'react';
import { Box, Container } from '@mui/material';
import BookDemoForm from '../components/book-demo-form';
import ParticleBackground from '../components/particle-background';

export default function BookDemoPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)',
        position: 'relative',
        overflow: 'hidden',
        // py: 6,
        
      }}
    >
     <ParticleBackground speed={0.3} />
      <Container
        sx={{
          position: 'relative',
          zIndex: 10,
        }}
      >
        <BookDemoForm />
      </Container>
    </Box>
  );
}