export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mt-6">{description}</p>
    </div>
  );
}
