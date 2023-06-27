import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export function HeaderRow() {
  const links = [
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
  ];
  return (
    <div className="flex sticky top-0 h-fit flex-row justify-between z-50 p-5 flex-wrap md:flex-nowrap shadow-sm backdrop-blur-sm">
      <Link to="/">
        <div className="text-3xl sm:text-5xl lg:text-6xl font-bold whitespace-nowrap">
          Nguyen Minh Tuan
        </div>
        <TypeAnimation
          sequence={[
            'I am a Backend Developer',
            1000,
            'Passionate about Web Development',
            1000,
            'Constantly Learning and Growing',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1rem', display: 'inline-block' }}
          repeat={Infinity}
        />
      </Link>
      <div className="flex items-center w-full justify-center pt-5 md:pt-0 md:justify-end">
        <ul className="flex flex-wrap justify-center md:justify-end">
          {links.map((item) => {
            return (
              <li key={item.path} className="pr-3">
                <Link
                  to={item.path}
                  className="leading-7 text-xl group transition-all duration-300 ease-in-out"
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
