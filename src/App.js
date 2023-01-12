// react imports
import { useState } from "react";
// component imports
import General from "./components/general";
import GeneralDisplay from "./components/generalDisplay";
import Work from "./components/work";
import WorkDisplay from "./components/workDisplay";
// css imports 
import "./styles/app.css";
import "./styles/forms.css";
import "./styles/display.css";

const App = ({ generalTemplate, workExperienceTemplate }) => {

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
          {/* education - expandable */}
          {/* skills - auto-expand */}
        </section>
        <section className={"show"}>
          <GeneralDisplay generalInfo={generalInfo} />
          {workExperience.map(experience =>
          <WorkDisplay key={experience.id} experience={experience} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
