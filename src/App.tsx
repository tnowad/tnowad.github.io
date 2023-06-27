import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Resume } from './pages/Resume';
import { Skill } from './pages/Skill';
import { Layout } from './components/Layout';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/experience" Component={Experience} />
          <Route path="/project" Component={Project} />
          <Route path="/skill" Component={Skill} />
          <Route path="/resume" Component={Resume} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
