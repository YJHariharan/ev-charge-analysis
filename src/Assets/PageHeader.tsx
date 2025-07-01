const PageHeader = ({ title, subtitle, backgroundImage }: { title: string, subtitle: string, backgroundImage: string }) => {
  return (
    <header
      className="text-white text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">{subtitle}</p>
    </header>
  );
};

export default PageHeader;
