import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Authorize from './components/authorize';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box my={4}>
          <Authorize />
        </Box>
      </Container>
    </div>
  );
}

export default App;
