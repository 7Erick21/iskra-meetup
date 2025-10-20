import { useState } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useMeetupStore } from '../../stores/meetup';
import { useNavigate } from 'react-router-dom';
import { ROUTE_HOME } from '../../utils/route';

export default function NewMeetupForm() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    address: '',
    description: ''
  });

  const addMeetup = useMeetupStore(state => state.addMeetup);
  const navigate = useNavigate();

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMeetup = {
      id: Date.now().toString(),
      ...formData
    };

    addMeetup(newMeetup);
    navigate(ROUTE_HOME);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' value={formData.title} onChange={handleChange} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' id='image' value={formData.image} onChange={handleChange} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='5'
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type='submit'>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
