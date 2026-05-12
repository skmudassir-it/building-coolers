interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-100 p-6 ${
        hover
          ? "hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
