import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useFavoriteStore } from '../../stores/favorite';
import MeetupItem from './MeetupItem';

// Mock item
const mockItem = {
  id: 'test-id',
  title: 'Test Meetup',
  image: 'https://example.com/image.jpg',
  address: '123 Test Street',
  description: 'Test description'
};

describe('MeetupItem', () => {
  beforeEach(() => {
    useFavoriteStore.setState({ favorites: [] });
  });

  test('renders item and toggles favorite', () => {
    render(<MeetupItem item={mockItem} />);

    expect(screen.getByText('Test Meetup')).toBeInTheDocument();
    expect(screen.getByText('Add to favorites')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Add to favorites'));
    expect(screen.getByText('Remove from favorites')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Remove from favorites'));
    expect(screen.getByText('Add to favorites')).toBeInTheDocument();
  });
});
