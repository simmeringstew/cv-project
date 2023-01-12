import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const generalTemplate = {
    name: "",
    email: "",
    number: ""
};

const workExperienceTemplate = {
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    id: 1
};

const educationTemplate = {
    degree: "",
    school: "",
    graduationYear: "",
    id: 1
};

const skillTemplate = {
    skill: "",
    id: 1
};

ReactDOM.createRoot(document.getElementById("root")).render(<App generalTemplate={generalTemplate} workExperienceTemplate={workExperienceTemplate} educationTemplate={educationTemplate} skillTemplate={skillTemplate} />);
