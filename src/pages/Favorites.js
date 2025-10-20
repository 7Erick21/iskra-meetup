import MeetupItem from '../components/meetups/MeetupItem';
import { useFavoriteStore } from '../stores/favorite';
import classes from './../components/meetups/MeetupList.module.css';

export default function FavoritesPage() {
  const { favorites } = useFavoriteStore();

  return (
    <section>
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className={classes.list}>
          {favorites.map(item => (
            <MeetupItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
