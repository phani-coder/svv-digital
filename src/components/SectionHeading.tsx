interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: Props) => (
  <div className={`mb-12 md:mb-16 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
    {label && (
      <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    {description && (
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
