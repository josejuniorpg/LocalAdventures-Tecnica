import { render, screen } from '@/test-utils';
import { Index } from './index';

describe('Index component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Index />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
