// react imports
import { useState } from "react";
// component imports
import General from "./components/general";
import GeneralDisplay from "./components/generalDisplay";
import Work from "./components/work";
import WorkDisplay from "./components/workDisplay";
import Education from "./components/education";
import EducationDisplay from "./components/educationDisplay";
// css imports 
import "./styles/app.css";
import "./styles/forms.css";
import "./styles/display.css";

const App = ({ generalTemplate, workExperienceTemplate, educationTemplate }) => {

  // for the general info
  const [generalInfo, setGeneralInfo] = useState({...generalTemplate});
  const updateGeneral = (copy) => {
    setGeneralInfo(copy);
  }
  
  // work experience section
  const [workExperience, setWorkExperience] = useState([{...workExperienceTemplate}]);
  const updateWorkExperience = (copy) => {
    setWorkExperience(copy);
  }
  const addNewWork = () => {
    const newTemplate = {...workExperienceTemplate};
    newTemplate.id = workExperience.length + 1;
    setWorkExperience(workExperience.concat(newTemplate));
  }

  // education section
  const [education, setEducation] = useState([{...educationTemplate}]);
  const updateEducation = (copy) => {
    setEducation(copy);
  }
  const addNewEducation = () => {
    const newTemplate = {...educationTemplate};
    newTemplate.id = education.length + 1;
    setEducation(education.concat(newTemplate));
  }


  return (
    <div>
      <header className={"container"}>
        <h1>CV Building App</h1>
      </header>
      <main className={"container"}>
        <section className={"build"}>
          <General generalInfo={generalInfo} updateGeneral={updateGeneral} />
          <h2 className="form-title">Work Experience</h2>
          <div>
            {workExperience.map(experience =>
            <Work key={experience.id} experience={experience} workExperience={workExperience} updateWorkExperience={updateWorkExperience} addNewWork={addNewWork} />
            )}
          </div>
          <h2 className="form-title">Education</h2>
          <div>
            {education.map(study => 
            <Education key={study.id} study={study} education={education} updateEducation={updateEducation} addNewEducation={addNewEducation} />
            )}
          </div>
          {/* skills - auto-expand */}
        </section>
        <section className={"show"}>
          <GeneralDisplay generalInfo={generalInfo} />
          {workExperience.map(experience =>
          <WorkDisplay key={experience.id} experience={experience} />
          )}
          {education.map(study =>
          <EducationDisplay key={study.id} study={study} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
