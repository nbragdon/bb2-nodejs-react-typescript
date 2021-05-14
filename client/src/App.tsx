import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Authorize from './components/authorize';
import Navbar from './components/navbar';
import Dataviewer from './components/dataviewer';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container maxWidth="lg">
          <Box my={4}>
            <Switch>
              <Route exact path="/">
                <Authorize />
              </Route>
              <Route path="/benefit">
                <Dataviewer dataUrl="/api/data/benefit" name="Benefit"></Dataviewer>
              </Route>
              <Route path="/patient">
                <Dataviewer dataUrl="/api/data/patient" name="Patient"></Dataviewer>
              </Route>
              <Route path="/coverage">
                <Dataviewer dataUrl="/api/data/coverage" name="Coverage"></Dataviewer>
              </Route>
              <Route path="/userprofile">
                <Dataviewer dataUrl="/api/data/userprofile" name="User Profile"></Dataviewer>
              </Route>
            </Switch>
          </Box>
        </Container>
      </div>
    </Router>
  );
}

export default App;
