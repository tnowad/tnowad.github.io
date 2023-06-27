import { Link } from 'react-router-dom';
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
    <div className="flex sticky flex-row justify-between p-5 flex-wrap md:flex-nowrap">
      <div>
        <div className="text-2xl">Hello, I'm</div>
        <div className="text-3xl sm:text-5xl lg:text-6xl font-bold whitespace-nowrap">
          Nguyen Minh Tuan
        </div>
        <div>I'm a Backend Developer</div>
      </div>
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
