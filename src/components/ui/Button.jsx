const variants = {
  primary:
    'bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  secondary:
    'border border-border bg-transparent text-text hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
};

export function Button({ href, children, variant = 'primary', target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

