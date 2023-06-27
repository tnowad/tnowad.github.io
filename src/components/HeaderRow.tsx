import { Link } from 'react-router-dom';
import { useState } from 'react';

export function HeaderRow() {
  const [links, setLinks] = useState([
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Experience',
      path: '/experience',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'Skills',
      path: '/skills',
    },
    {
      title: 'Resume',
      path: '/resume',
    },
  ]);
  return (
    <div className="flex flex-row">
      <div>
        <div className="text-2xl">Hello, I'm</div>
        <div className="text-6xl font-bold">Nguyen Minh Tuan</div>
        <div>I'm a Backend Developer</div>
      </div>
      <div>
        <ul className="flex">
          {links.map((item) => {
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
      </div>
    </div>
  );
}
