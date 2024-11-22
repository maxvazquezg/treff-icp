import { useState } from "react";
import { treff_icp_backend } from "declarations/treff-icp-backend";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
// import "bulma/css/bulma.min.css";
// import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
import "./App.css";
import "./index.scss";
import LoadingIndicator from "./LoadingIndicator";
import Navbar from "./components/Navbar";

import { ScrollTop } from 'primereact/scrolltop';
        

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    treff_icp_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <LoadingIndicator />
      <Navbar />
      <ScrollTop />
      <Routes>
        {/* <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section> */}
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
