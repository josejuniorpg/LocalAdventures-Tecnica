import { Welcome } from '@/src/components/Welcome/index';
import { render, screen } from '@/test-utils';

describe('Index component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
