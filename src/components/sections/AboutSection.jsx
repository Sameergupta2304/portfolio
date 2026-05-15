import { motion } from 'framer-motion';
import { siteContent } from '../../content/site';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={siteContent.about.title}
              description={siteContent.about.description}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <motion.div
              className="panel grid gap-8 p-8 sm:p-10"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {siteContent.about.stats.map((stat) => (
                <div key={stat.label} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                  <div className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
