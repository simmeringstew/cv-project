// react imports
import { useState } from "react";
// component imports
import General from "./components/general";
// css imports 
import "./styles/app.css";

const App = () => {

  const [generalInfo, setGeneralInfo] = useState(null);

  return (
    <div>
      <header className={"container"}>
        <h1>CV Building App</h1>
      </header>
      <main className={"container"}>
        <section className={"build"}>
          <General />
          {/* work experience - expandable */}
          {/* education - expandable */}
          {/* skills - auto-expand */}
        </section>
        <section className={"show"}>
          {/* display things as they are made */}
          {/* once all are full add a print button turn section into pdf */}
        </section>
      </main>
    </div>
  );
}

export default App;
