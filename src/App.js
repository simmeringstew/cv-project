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

const App = ({ workTemplate }) => {

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
  const [workComponents, setWorkComponents] = useState([workTemplate]);
  const addWork = (data) => {
    const updatedWork = {
      jobTitle: data.jobTitle.trim(),
      company: data.company.trim(),
      startDate: data.startDate.trim(),
      endDate: data.endDate.trim(),
      description: data.description.trim(),
      id: data.id
    }
    setWorkComponents(workComponents.map(component => component.id !== updatedWork.id ? component : updatedWork));
  }
  const addJobArea = (data) => {
    const newJobArea = {...workTemplate, id: data.id + 1};
    const lessThan = workComponents.filter(component => component.id < newJobArea.id);
    const onesToChange = workComponents.filter(component => component.id >= newJobArea.id);
    const addedOne = onesToChange.map(addOneToId);
    if (onesToChange.length > 0) {
      setWorkComponents([...lessThan, newJobArea, ...addedOne]);
    }
    else {
      setWorkComponents([...lessThan, newJobArea]);
    }
  }
  function addOneToId(component) {
    component.id += 1;
    return component;
  }
  const removeJobArea = (data) => {
    const lessThan = workComponents.filter(component => component.id < data.id);
    const onesToChange = workComponents.filter(component => component.id > data.id);
    const minusOne = onesToChange.map(removeOneFromId);
    setWorkComponents([...lessThan, ...minusOne]);
  }
  function removeOneFromId(component) {
    component.id -= 1;
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
            {workComponents.map(component => 
            <Work key={component.id} data={component} addWork={addWork} addJobArea={addJobArea} removeJobArea={removeJobArea} />
            )}
          </div>
          {/* education - expandable */}
          {/* skills - auto-expand */}
        </section>
        <section className={"show"}>
          <GeneralDisplay info={generalInfo} />
          <div>
            {workComponents.map(component =>
            <WorkDisplay key={component.id} data={component} />
            )}
          </div>
          {/* once all are full add a print button turn section into pdf */}
        </section>
      </main>
    </div>
  );
}

export default App;
