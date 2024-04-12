import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import FormRef from './components/FormRef';
import FormState from './components/FormState';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form" id="form-link">Form Layout Rendering without Submission Handling</Link>
            </li>
            <li>
              <Link to="/form-ref" id="form-ref-link">Using useRef for Input and Submission Handling</Link>
            </li>
            <li>
              <Link to="/form-state" id="form-state-link">Using useState for Input and Submission Handling</Link>
            </li>
          </ul>
        </nav>

        <Route path="/form" exact component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </div>
    </Router>
  );
};

export default App;
