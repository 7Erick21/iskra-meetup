import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewMeetupForm from './NewMeetupForm';
import { useMeetupStore } from '../../stores/meetup';
import { MemoryRouter } from 'react-router-dom';

// Mock de la función de navegación
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

describe('NewMeetupForm', () => {
  test('permite crear un nuevo meetup', () => {
    const addMeetup = jest.fn();
    useMeetupStore.setState({ addMeetup });

    render(
      <MemoryRouter>
        <NewMeetupForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Meetup Title'), {
      target: { value: 'Nuevo Meetup' }
    });
    fireEvent.change(screen.getByLabelText('Meetup Image'), {
      target: { value: 'https://example.com/image.jpg' }
    });
    fireEvent.change(screen.getByLabelText('Address'), {
      target: { value: 'Calle Falsa 123' }
    });
    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: 'Una descripción genial' }
    });

    fireEvent.click(screen.getByText('Add Meetup'));

    expect(addMeetup).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Nuevo Meetup',
        image: 'https://example.com/image.jpg',
        address: 'Calle Falsa 123',
        description: 'Una descripción genial'
      })
    );
  });
});
