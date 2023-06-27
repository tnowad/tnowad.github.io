import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Layout.css';
import { HeaderColumn } from './HeaderColumn';
import { HeaderRow } from './HeaderRow';

export function Layout({ ...props }) {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div
      className={`text-[#051747] relative font-mono min-w-full min-h-screen ${
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
