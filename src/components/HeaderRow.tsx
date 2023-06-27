import { Link, useLocation } from 'react-router-dom';

export function HeaderRow() {
  const location = useLocation();

  return (
    <div className="flex flex-row">
      <div>
        <div className="text-2xl">Hello, I'm</div>
        <div className="text-6xl font-bold">Nguyen Minh Tuan</div>
        <div>I'm a Backend Developer</div>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/project">Projects</Link>
        <Link to="/skill">Skills</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
}
