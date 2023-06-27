import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import background from '../assets/background.png';
import './Layout.css';
import { HeaderColumn } from './HeaderColumn';
import { HeaderRow } from './HeaderRow';

export function Layout({ ...props }) {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div
      style={{ background: `url(${background})` }}
      className={`text-[#051747] bg-slate-300 relative font-mono min-w-full min-h-screen ${
        location.pathname == '/'
          ? 'flex items-center flex-col justify-center'
          : ''
      }`}
    >
      {location.pathname == '/' ? <HeaderColumn /> : <HeaderRow />}

      {/* <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          key={location.key}
          classNames="page-transition"
          timeout={400}
        > */}
      <div ref={nodeRef} className="page">
        {props.children}
      </div>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </div>
  );
}
