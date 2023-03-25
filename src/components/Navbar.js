import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-around items-center h-20 text-white backdrop-blur-sm z-10">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/careers">Careers</Link>
    </div>
  );
};
export default Navbar;
