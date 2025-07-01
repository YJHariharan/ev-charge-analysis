type SectionTitleProps = {
  title: string;
  subtitle: string;
  align?: "center" | "left";
};

const SectionTitle = ({ title, subtitle, align = "left" }: SectionTitleProps) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-8 ${alignment}`}>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
