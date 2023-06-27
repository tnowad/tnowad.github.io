import { useLocation } from 'react-router-dom';
import { Header } from './Header';
export function Layout({ ...prop }) {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div>{prop.children}</div>
    </div>
  );
}
