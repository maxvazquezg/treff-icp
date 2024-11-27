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

import { ScrollTop } from "primereact/scrolltop";
import AboutUs from "./pages/AboutUs";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import Privacity from "./pages/Privacity";
import Terms from "./pages/Terms";
import ExploreCategory from "./pages/ExploreCategory";
import Explore from "./pages/Explore";
import Service from "./pages/Service";
import ProjectPayment from "./pages/ProjectPayment";
import Footer from "./components/Footer";

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
        <Route path={routes.ABOUT_US} element={<AboutUs />} />
        <Route path={routes.HELP_CENTER} element={<HelpCenter />} />
        <Route path={routes.CONTACT} element={<Contact />} />
        <Route path={routes.PRIVACITY} element={<Privacity />} />
        <Route path={routes.TERMS} element={<Terms />} />
        <Route path={routes.EXPLORECATEGORY} element={<ExploreCategory />} />
        <Route path={routes.EXPLORE} element={<Explore />} />
        <Route path={routes.EXPLOREID} element={<Explore />} />
        <Route path={routes.SERVICE} element={<Service />} />
        <Route path={routes.NEWPROJECT} element={<ProjectPayment />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
