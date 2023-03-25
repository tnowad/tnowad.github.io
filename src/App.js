import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PublicLayout from "./layouts/PublicLayout";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
function App() {
  return (
    <>
      <Routes>
        {[
          {
            path: "/",
            element: <Home />,
            layout: null,
          },
          {
            path: "/about",
            element: <PublicLayout children={About} />,
          },
          {
            path: "/experience",
            element: <PublicLayout children={Experience} />,
          },
          {
            path: "/projects",
            element: <PublicLayout children={Project} />,
          },
          {
            path: "/skills",
            element: <PublicLayout children={Skills} />,
          },
          {
            path: "/resume",
            element: <PublicLayout children={Resume} />,
          },
          {
            path: "*",
            element: <PublicLayout children={Home} />,
          },
        ].map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
