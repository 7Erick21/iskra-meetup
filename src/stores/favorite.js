import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoriteStore = create(
  persist(
    set => ({
      favorites: [],
      addFavorite: item =>
        set(state => ({
          favorites: [...state.favorites, item]
        })),
      removeFavorite: id =>
        set(state => ({
          favorites: state.favorites.filter(fav => fav.id !== id)
        }))
    }),
    {
      name: 'favorite-storage'
    }
  )
);
