import Example from '@/components/custom/Example';
import { render, screen } from '@testing-library/react';

describe('Example component', () => {
  it('renders hello world text', () => {
    render(<Example />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
