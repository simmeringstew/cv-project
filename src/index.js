import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const workTemplate = {
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    id: 1
  }

ReactDOM.createRoot(document.getElementById("root")).render(<App workTemplate={workTemplate} />);
