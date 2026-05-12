interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-blue-100" : "text-text-light"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
