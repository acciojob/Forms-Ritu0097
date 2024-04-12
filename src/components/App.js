import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

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

        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
