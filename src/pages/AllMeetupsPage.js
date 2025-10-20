import MeetupItem from '../components/meetups/MeetupItem';
import { useMeetupStore } from '../stores/meetup';
import { useFetch } from '../util-hooks/useFetch';
import classes from './../components/meetups/MeetupList.module.css';

export default function AllMeetupsPage() {
  const { data } = useFetch({
    url: '/data.json'
  });
  const meetups = useMeetupStore(state => state.meetups);

  if (!data) return <p>Loading...</p>;

  const allMeetups = [...data, ...meetups];

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {allMeetups.map((item, index) => (
          <MeetupItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}
