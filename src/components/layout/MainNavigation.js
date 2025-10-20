import { useEffect, useState } from 'react';
import { ROUTE_FAVORITES, ROUTE_HOME, ROUTE_NEW_MEETUP } from './../../utils/route';

import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';
import { useFavoriteStore } from '../../stores/favorite';

export default function MainNavigation() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { favorites } = useFavoriteStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${classes.header} ${showHeader ? classes.show : classes.hide}`}
      data-test='navigation-header'
    >
      <div className={classes.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <Link to={ROUTE_HOME}>All Meetups</Link>
          </li>
          <li>
            <Link to={ROUTE_FAVORITES}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={ROUTE_NEW_MEETUP}>
              My Favorites
              <span className={classes.badge}>{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
