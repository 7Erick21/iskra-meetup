import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useFavoriteStore } from '../../stores/favorite';

export default function MeetupItem({ item }) {
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();

  const isFavorite = favorites.some(fav => fav.id === item.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
