// react imports
import { useState } from "react";
// component imports
import General from "./components/general";
import GeneralDisplay from "./components/generalDisplay";
// css imports 
import "./styles/app.css";
import "./styles/forms.css";
import "./styles/display.css";

const App = () => {

  const [generalInfo, setGeneralInfo] = useState(null);
  const displayGeneral = (name, email, number) => {
    const generalObject = {
      name: name,
      email: email,
      number: number
    }
    setGeneralInfo(generalObject);
  }

  return (
    <div>
      <header className={"container"}>
        <h1>CV Building App</h1>
      </header>
      <main className={"container"}>
        <section className={"build"}>
          <General displayGeneral={displayGeneral}/>
          {/* work experience - expandable */}
          {/* education - expandable */}
          {/* skills - auto-expand */}
        </section>
        <section className={"show"}>
          <GeneralDisplay info={generalInfo} />
          {/* display things as they are made */}
          {/* once all are full add a print button turn section into pdf */}
        </section>
      </main>
    </div>
  );
}

export default App;
