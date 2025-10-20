import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMeetupStore = create(
  persist(
    set => ({
      meetups: [],
      addMeetup: newMeetup =>
        set(state => ({
          meetups: [...state.meetups, newMeetup]
        }))
    }),
    {
      name: 'meetup-storage'
    }
  )
);
