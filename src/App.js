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

const App = () => {

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

  // work experience section
  const [amountOfWorkAreas, setAmountOfWorkAreas] = useState([1]);
  const addWorkArea = (number) => {
    const newNumber = number + 1;
    const equalOrMore = amountOfWorkAreas.filter(amount => amount >= newNumber);
    if (equalOrMore.length === 0) {
      setAmountOfWorkAreas(amountOfWorkAreas.concat(newNumber));
      return;
    }
    const lessThan = amountOfWorkAreas.filter(amount => amount < newNumber);
    const addedOne = equalOrMore.map(amount => amount + 1);
    setAmountOfWorkAreas([...lessThan, newNumber, ...addedOne]);
  }
  const removeWorkArea = (oneToRemove) => {
    // prevent removing last work area
    if (amountOfWorkAreas.length === 1) {
      return;
    }
    // if deleting the last experience
    const greaterThan = amountOfWorkAreas.filter(amount => amount > oneToRemove);
    if (greaterThan.length === 0) {
      setAmountOfWorkAreas(amountOfWorkAreas.filter(amount => amount !== oneToRemove));
      if (workExperience.length > 0) {
        setWorkExperience(workExperience.filter(experience => experience.id !== oneToRemove));
      }
      return;
    }
    // if deleting any other experience
    const minusOne = greaterThan.map(amount => amount - 1);
    const lessThan = amountOfWorkAreas.filter(amount => amount < oneToRemove);
    setAmountOfWorkAreas([...lessThan, ...minusOne]);
    const biggerExperience = workExperience.filter(experience => experience.id > oneToRemove);
    const experienceMinusOne = biggerExperience.map(experience => removeOneId(experience));
    const experienceLessThan = workExperience.filter(experience => experience.id < oneToRemove);
    setWorkExperience([...experienceLessThan, ...experienceMinusOne]);
  }
  const [workExperience, setWorkExperience] = useState([]);
  const addWorkExperience = (experienceObject) => {
    setWorkExperience(workExperience.concat(experienceObject));
  }
  function removeOneId(component) {
    component.id = component.id - 1;
    return component;
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
            {amountOfWorkAreas.map(area => 
            <Work key={area} workAreaNumber={area} add={addWorkArea} remove={removeWorkArea} addWorkExperience={addWorkExperience} />
            )}
          </div>
          {/* education - expandable */}
          {/* skills - auto-expand */}
        </section>
        <section className={"show"}>
          <GeneralDisplay info={generalInfo} />
          {workExperience.map(experience => 
          <WorkDisplay key={experience.id} experience={experience} />
          )}
          {/* once all are full add a print button turn section into pdf */}
        </section>
      </main>
    </div>
  );
}

export default App;
