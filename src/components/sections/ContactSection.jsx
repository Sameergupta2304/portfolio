import { siteContent } from '../../content/site';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="section-shell pt-0">
      <Container>
        <Reveal>
          <div className="panel overflow-hidden p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <SectionHeading
                eyebrow="Contact"
                title={contact.title}
                description={contact.description}
              />
              <div className="flex flex-col gap-4 lg:items-end">
                {/* Email — opens Gmail compose with To: pre-filled */}
                <Button
                  href={`https://mail.google.com/mail/?view=cm&to=${contact.email}`}
                  target="_blank"
                  variant="primary"
                >
                  {contact.email}
                </Button>

                {/* LinkedIn & GitHub as separate clickable links */}
                <div className="flex flex-col gap-2 lg:items-end">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
