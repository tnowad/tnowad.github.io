import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Layout.css';
import { Header } from './Header';

export function Layout({ ...props }) {
  const location = useLocation();

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>
          <div className="page">{props.children}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
