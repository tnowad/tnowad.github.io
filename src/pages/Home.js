import { Link } from "react-router-dom";
import {
  faFacebookF,
  faGithub,
  faHackerrank,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-[#051747] font-mono">
        <p className="text-2xl">Hello, I'm</p>
        <h1 className="text-6xl font-bold ">Nguyen Minh Tuan</h1>
        <p className="text-2xl">I'm a Backend Developer</p>
        <ul className="flex">
          {[
            {
              title: "Home",
              path: "/",
              status: true,
            },
            {
              title: "About",
              path: "/about",
            },
            {
              title: "Experience",
              path: "/experience",
            },
            {
              title: "Projects",
              path: "/projects",
            },
            {
              title: "Skills",
              path: "/skills",
            },
            {
              title: "Resume",
              path: "/resume",
            },
          ].map((item) => {
            return (
              <li key={item.path} className="pr-5">
                <Link
                  to={item.path}
                  className="leading-[100px] text-xl group transition-all duration-300 ease-in-out"
                >
                  <span
                    className={`bg-left-bottom bg-gradient-to-r from-cyan-900 to-sky-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out `}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex">
          {[
            {
              icon: faFacebookF,
              path: "https://www.facebook.com/TNOWAD",
            },
            {
              icon: faLinkedin,
              path: "https://www.linkedin.com/in/minh-tuan-nguyen-900855252/",
            },
            {
              icon: faGithub,
              path: "https://github.com/tnowad/",
            },
            {
              icon: faHackerrank,
              path: "https://www.hackerrank.com/tnowad",
            },
            {
              icon: faTwitter,
              path: "https://twitter.com/tnowad_t",
            },
          ].map((item) => {
            return (
              <li className="pr-5">
                <a
                  href={item.path}
                  className="flex items-center justify-center h-8 w-8 hover:bg-zinc-800 hover:rounded-full hover:text-white transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
