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
    <div className="text-[#051747] font-mono">
      {location.pathname == '/' ? <HeaderColumn /> : <HeaderRow />}
      <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <div ref={nodeRef} className="page">
            {props.children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
