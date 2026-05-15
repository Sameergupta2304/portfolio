import { motion } from 'framer-motion';

export function ProjectCard({ project }) {
  return (
    <motion.article
      className="panel flex h-full flex-col p-8 sm:p-9"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div>
        <p className="eyebrow">Selected Work</p>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text">{project.title}</h3>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-text/85">Problem</p>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{project.problem}</p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-text/85">Approach</p>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{project.approach}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
