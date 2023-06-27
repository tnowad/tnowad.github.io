import {
  faFacebookF,
  faGithub,
  faHackerrank,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Home() {
  return (
    <div className="flex">
      {[
        {
          icon: faFacebookF,
          path: 'https://www.facebook.com/TNOWAD',
        },
        {
          icon: faLinkedin,
          path: 'https://www.linkedin.com/in/minh-tuan-nguyen-900855252/',
        },
        {
          icon: faGithub,
          path: 'https://github.com/tnowad/',
        },
        {
          icon: faHackerrank,
          path: 'https://www.hackerrank.com/tnowad',
        },
        {
          icon: faTwitter,
          path: 'https://twitter.com/tnowad_t',
        },
      ].map((item) => {
        return (
          <div className="pr-5" key={item.path}>
            <a
              href={item.path}
              className="flex items-center justify-center h-8 w-8 hover:bg-zinc-800 hover:rounded-full hover:text-white transition-all duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
