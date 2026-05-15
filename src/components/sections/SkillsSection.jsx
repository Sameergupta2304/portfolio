import { siteContent } from '../../content/site';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A focused toolkit for thoughtful digital work."
            description="I keep the stack intentional. The goal is not more tools, but better decisions, stronger systems, and cleaner outcomes."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteContent.skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={0.08 * (index + 1)}>
              <div className="panel h-full p-8 sm:p-9">
                <h3 className="text-xl font-semibold tracking-tight text-text">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors duration-300 hover:border-accent/40 hover:text-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
