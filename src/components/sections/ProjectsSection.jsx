import { siteContent } from '../../content/site';
import { Container } from '../ui/Container';
import { ProjectCard } from '../ui/ProjectCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Case studies grounded in real product problems."
            description="Each project balances strategy, systems thinking, and execution with a bias toward clean experiences that perform under pressure."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteContent.projects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 * (index + 1)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
