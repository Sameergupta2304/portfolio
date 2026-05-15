import { motion } from 'framer-motion';
import { siteContent } from '../../content/site';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function HeroSection() {
  const { profile } = siteContent;

  return (
    <section
      id="hero"
      className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
    >
      <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[120px] sm:h-96 sm:w-96" />
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">{profile.role}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-tight text-text/92 sm:text-3xl lg:text-4xl">
              {profile.valueStatement}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {profile.description}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={profile.primaryCta.href} variant="primary">
                {profile.primaryCta.label}
              </Button>
              <Button href={profile.secondaryCta.href} variant="secondary">
                {profile.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <motion.div
              className="mt-16 grid gap-6 border-t border-border pt-8 text-sm text-muted sm:grid-cols-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div>
                <p className="text-text">Current focus</p>
                <p className="mt-2 leading-6">Frontend development, responsive design, and clean interface structure.</p>
              </div>
              <div>
                <p className="text-text">Core stack</p>
                <p className="mt-2 leading-6">React, Tailwind CSS, JavaScript, HTML, and CSS.</p>
              </div>
              <div>
                <p className="text-text">Workflow</p>
                <p className="mt-2 leading-6">Maintainable code, performance awareness, and steady problem-solving.</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
