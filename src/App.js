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

const App = ({ workExperienceTemplate }) => {

  // for the general info
  const [generalInfo, setGeneralInfo] = useState(null);
  const displayGeneral = (name, email, number) => {
    const generalObject = {
      name: name.trim(),
      email: email.trim(),
      number: number.trim()
    }
    setGeneralInfo(generalObject);
  }
  const clearGeneral = () => {setGeneralInfo(null);}

  const [workExperience, setWorkExperience] = useState([workExperienceTemplate]);
  const updateWorkExperience = (copy) => {
    setWorkExperience(copy);
  }
  const addNewWork = () => {
    const newTemplate = {workExperienceTemplate, id : workExperience.length + 1};
    setWorkExperience([...workExperience, newTemplate]);
  }


  return (
    <div>
      <header className={"container"}>
        <h1>CV Building App</h1>
      </header>
      <main className={"container"}>
        <section className={"build"}>
          <General displayGeneral={displayGeneral} clearGeneral={clearGeneral} />
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
          
        </section>
      </main>
    </div>
  );
}

export default App;
