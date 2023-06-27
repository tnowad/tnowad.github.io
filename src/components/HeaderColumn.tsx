import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export function HeaderColumn() {
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
    <div className="flex flex-col p-5">
      <div>
        <div className="text-2xl">Hello, I'm</div>
        <div className="text-3xl min-[510px]:text-5xl md:text-6xl font-bold">
          <TypeAnimation sequence={['Nguyen Minh Tuan', 100]} cursor={false} />
        </div>
        <div className="text-xl min-[510px]:text-2xl">
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
        </div>
      </div>
      <ul className="flex flex-wrap pt-2 justify-center">
        {links.map((item) => {
          return (
            <li key={item.path} className="pr-5">
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
  );
}
