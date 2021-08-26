import React from 'react';
import Authorize from './components/authorize';
import Navbar from './components/navbar';
import Header from './components/header';
import Dataviewer from './components/dataviewer';
import Patient from './components/patient';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import { TabPanel, Tabs } from '@cmsgov/design-system';

function App() {
  return (
    <Router>
      <Header />
      <Tabs tablistClassName="ds-u-margin-top--3">
        <TabPanel id="patient" tab="Patient info">
          <Patient />
        </TabPanel>
        <TabPanel id="routes" tab="Routes and settings">

        <div>
          <div>
            <Navbar />
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
          </div>
        </div>
        </TabPanel>
        <TabPanel id="summary" tab="Summary">
          <p>
            Blue Button 2.0 is a standards-based application programming interface (API) that delivers Medicare Part A, B, and D data for over 60 million Medicare beneficiaries. <a href="https://bluebutton.cms.gov/">Learn more about Blue Button 2.0</a>
          </p>

          <p>
            The CMS design system is a set of open source design and front-end development resources
            for creating Section 508 compliant, responsive, and consistent websites. It builds on the
            U.S. Web Design System and extends it to support additional CSS and React components,
            utility classes, and a grid framework to allow teams to quickly prototype and build
            accessible, responsive, production-ready websites. <a href="https://design.cms.gov/">Learn more about CMS Design System</a>
          </p>
        </TabPanel>
      </Tabs>
    </Router>
  );
}

export default App;
