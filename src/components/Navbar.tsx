import { Link } from 'react-router-dom';
export function Navbar() {
  return (
    <div className="">
      <div>
        <div>Hello, I'm</div>
        <div>Nguyen Minh Tuan</div>
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