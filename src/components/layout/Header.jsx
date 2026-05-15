import { siteContent } from '../../content/site';
import { Container } from '../ui/Container';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-canvas/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-text/90 uppercase">
          {siteContent.profile.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
