import { siteContent } from '../../content/site';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{siteContent.profile.name}</p>
        <p>Frontend Developer | Engineering Student</p>
      </Container>
    </footer>
  );
}
