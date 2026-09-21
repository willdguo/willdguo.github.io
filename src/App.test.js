import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('navigates between the primary research pages without an effect cleanup error', () => {
  const { unmount } = render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);

  const navigation = screen.getByRole('navigation', { name: 'Primary navigation' });
  fireEvent.click(within(navigation).getByRole('link', { name: 'Research' }));
  expect(screen.getByRole('heading', { name: 'Research', level: 1 })).not.toBeNull();

  expect(screen.getByRole('heading', { name: 'Publications' })).not.toBeNull();

  fireEvent.click(within(navigation).getByRole('link', { name: 'Projects / Notes' }));
  expect(screen.getByRole('heading', { name: 'Things I’ve explored.' })).not.toBeNull();
  unmount();
});
